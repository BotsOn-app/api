import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthorDto } from './dto/authors.dto';

@Injectable()
export class AuthorsService {
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

    async addAuthor(createAuthorDto: AuthorDto): Promise<any> {
        try {
            const author = await this.prisma.author.create({
                data: {
                    name: createAuthorDto.name,
                    avatarUrl: createAuthorDto.avatarUrl,
                },
            });
        } catch (e) {
            console.log(e);
        }
    }
}
