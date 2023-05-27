import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { stringify } from 'querystring';
import { ConfigService } from '@nestjs/config';

interface OAuthConfig {
    client_id: string;
    client_secret: string;
    callback_url: string
}

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
    constructor(
        private authService: AuthService,
        private configService: ConfigService
    ) {
        const config = configService.get<OAuthConfig>('oauth');

        if (!config)
            throw 'Config is empty, unable to use oauth';
        super({
            authorizationURL: `https://discordapp.com/api/oauth2/authorize?${stringify({
                client_id: config.client_id,
                redirect_uri: config.callback_url,
                response_type: 'code',
                scope: 'identify',
            })}`,
            tokenURL: 'https://discordapp.com/api/oauth2/token',
            scope: 'identify',
            clientID: config.client_id,
            clientSecret: config.client_secret,
            callbackURL: config.callback_url,
        });
    }

    async validate(accessToken: string): Promise<any> {
        const response = await fetch('https://discord.com/api/users/@me', {
            headers: {
                authorization: 'Bearer ' + accessToken
            }
        });

        const { id } = JSON.parse(await response.text());
        const user = await this.authService.validateUser(id);

        if (user != null) {
            return user;
        } else {
            throw new UnauthorizedException();
        }
    }
}