import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersDto } from './dto/users.dto';
import { Users } from '.prisma/client';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {
    }

    async getAuthor(id: string): Promise<Users> {
        return this.prisma.users.findUniqueOrThrow({
            where: {
                id: id,
            },
        });
    }

    async addAuthor(createAuthorDto: UsersDto): Promise<Users> {
        return this.prisma.users.create({
            data: {
                name: createAuthorDto.name,
                avatarUrl: createAuthorDto.avatar_url,
            },
        });
    }
}
