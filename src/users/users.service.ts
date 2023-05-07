import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getAuthor(id: string): Promise<any> {
        return await this.prisma.author.findUnique({
            include: {
                Extensions: true,
            },
            where: {
                id: Number(id),
            },
        });
    }

    async addAuthor(createAuthorDto: UsersDto): Promise<any> {
        try {
            const author = await this.prisma.author.create({
                data: {
                    name: createAuthorDto.name,
                    avatarUrl: createAuthorDto.avatar_url,
                },
            });
        } catch (e) {
            console.log(e);
        }
    }
}
