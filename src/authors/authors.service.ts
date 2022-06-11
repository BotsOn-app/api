import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
