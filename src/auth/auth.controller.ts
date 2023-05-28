import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { DiscordAuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { TokenEntity } from './entities/token.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @UseGuards(DiscordAuthGuard)
    @Get('login')
    async login(@Req() req: any): Promise<TokenEntity> {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Req() req: any) {
        return req.user;
    }
}