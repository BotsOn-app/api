import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { HttpClientService } from 'src/shared/http-client/http-client.service';
import { createHash } from 'node:crypto';
import { v4 as uuid } from 'uuid';
import {
    Auth,
    PostUser,
    PostUserSchema,
    User,
    UserSchema,
    UserToken,
    UserTokenSchema,
} from './dto/auth.dto';
import { stringify } from 'qs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    axiosClient: AxiosInstance;
    constructor(
        private httpClient: HttpClientService,
        private prisma: PrismaService,
    ) {
        this.axiosClient = this.httpClient.createClient();
    }

    /**
     *  @method getUserFirstAccessToken - Get the accessToken from the code received after callback
     * @param {string} code - Code given after callback
     * @returns {Promise<UserToken>}
     */
    async getUserFirstAccessToken(code: string): Promise<UserToken> {
        const baseUrl = 'https://discord.com/api/oauth2/token';

        const params = stringify({
            client_id: process.env.DISCORD_AUTH_CLIENT_ID,
            client_secret: process.env.DISCORD_AUTH_CLIENT_SECRET,
            redirect_uri: process.env.DISCORD_AUTH_CLIENT_REDIRECT,
            grant_type: 'authorization_code',
            code,
        });

        try {
            const response: { data: UserToken } = await this.axiosClient({
                method: 'post',
                url: baseUrl,
                data: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            await UserTokenSchema.parseAsync(response.data);

            return response.data;
        } catch (e) {
            console.log(e);
            throw new Error('Failed Discord Request');
        }
    }

    /**
     *  @method getUserInfo - Get Discord user's info
     * @param {string} accessToken - AccessToken stored in database to pass authorization
     * @returns {Promise<User>}
     */
    async getUserInfo(accessToken: string): Promise<User> {
        const baseUrl = 'http://discord.com/api/users/@me';

        try {
            const response = await this.axiosClient.get<User>(baseUrl, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            await UserSchema.parseAsync(response.data);

            return response.data;
        } catch (e) {
            console.log(e);
            throw new Error('Failed Discord Request');
        }
    }

    /**
     * @method saveUser - Save credentials in database after login
     * @param {PostUser} param - User's info and credentials
     * @returns {Promise<Auth>} - Auth without sensitive data (accessToken and refreshToken)
     */
    async saveUser({
        user,
        token,
    }: PostUser): Promise<Omit<Auth, 'accessToken' | 'refreshToken'>> {
        try {
            await PostUserSchema.parseAsync({ user, token });
        } catch (e) {
            console.log(e);
            throw new Error('Failed parsing process');
        }

        const publicAccessToken = createHash('sha256')
            .update(uuid())
            .digest('base64');

        try {
            const savedUser = await this.prisma.auth.create({
                data: {
                    accessToken: token.access_token,
                    expiresIn: token.expires_in,
                    refreshToken: token.refresh_token,
                    userId: user.id,
                    publicAccessToken,
                },
            });

            delete savedUser.accessToken;
            delete savedUser.refreshToken;

            return savedUser;
        } catch (e) {
            console.log(e);
            throw new Error('Failed Prisma creation');
        }
    }

    /**
     *  @method getUserAccessToken - Get the accessToken from the created publicAccessToken
     * @param {string} token - publicAccessToken created when inserting in database
     * @returns {Promise<string>} - AccessToken of the user
     */
    async getUserAccessToken(token: string): Promise<string> {
        try {
            const userAuth = await this.prisma.auth.findFirst({
                where: {
                    publicAccessToken: token,
                },
            });

            if (!userAuth) throw new Error("No user's found");

            return userAuth.accessToken;
        } catch (e) {
            console.log(e);
            throw new Error('Failed Prisma fetch');
        }
    }
}
