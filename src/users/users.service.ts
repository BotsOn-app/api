import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersDto } from './dto/users.dto';
import { User } from '.prisma/client';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {
    }

    async getAuthor(id: string): Promise<User> {
        return this.prisma.user.findUniqueOrThrow({
            where: {
                id: id,
            },
        });
    }

    async addAuthor(createAuthorDto: UsersDto): Promise<User> {
        return this.prisma.user.create({
            data: {
                name: createAuthorDto.name,
                avatarUrl: createAuthorDto.avatar_url,
            },
        });
    }
}
