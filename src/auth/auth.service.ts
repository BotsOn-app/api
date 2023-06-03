import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { TokenEntity } from './entities/token.entity';
import { User } from '.prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {
    }

    async validateUser(id: string): Promise<User | null> {
        const user = await this.userService.getAuthor(id);

        if (user == null)
            return null;
        return user;
    }

    async login(user: any): Promise<TokenEntity> {
        const payload = { name: user.name, id: user.id };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}