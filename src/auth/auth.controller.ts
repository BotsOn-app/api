import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Query,
    Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetAuth } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    /**
     * @return {Promise<Void>} Redirect to website if successfull, else returns 401
     */
    @Get('callback')
    async finaliseLogin(
        @Res() res,
        @Query('code') code: string,
    ): Promise<GetAuth> {
        if (!code)
            throw new HttpException(
                'Not Acceptable',
                HttpStatus.NOT_ACCEPTABLE,
            );
        try {
            const userToken = await this.authService.getUserFirstAccessToken(
                code,
            );

            const userInfo = await this.authService.getUserInfo(
                userToken.access_token,
            );

            const { publicAccessToken } = await this.authService.saveUser({
                user: userInfo,
                token: userToken,
            });

            res.status(200).redirect(
                `http://localhost:3000?login=success&token=${encodeURIComponent(
                    publicAccessToken,
                )}`,
            );
            return;
        } catch (e) {
            res.status(400).redirect('http://localhost:3000?login=error');
            return;
        }
    }

    /**
     * @param {string} token - Parameter of the route (':token')
     * @return {Promise<any>} Return user's info
     */
    @Get(':token')
    async getAuth(@Param('token') token: string) {
        if (!token)
            throw new HttpException(
                'Not Acceptable',
                HttpStatus.NOT_ACCEPTABLE,
            );
        try {
            const userToken = await this.authService.getUserAccessToken(
                decodeURIComponent(token),
            );

            const userInfo = await this.authService.getUserInfo(userToken);

            return userInfo;
        } catch (e) {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        }
    }
}
