import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class ExtensionsService {
    constructor(private prisma: PrismaService) { }

    /*
    async createExtension(dto: ExtensionsDto) {
        const extensions = await this.prisma.extensions.createMany({
            data: {
                version: "1.0.0",

            }
        })
    }
    */

    async getAllExtensions(): Promise<any[]> {
        return await this.prisma.extensions.findMany({
            include: {
                author: true,
                data: {
                    include: {
                        banner: true,
                        changes: true
                    }
                }
            }
        });
    }

    async getExtensionById(id: string): Promise<any> {
        return await this.prisma.extensions.findUnique({
            include: {
                author: true,
                data: {
                    include: {
                        banner: true,
                        changes: true
                    }
                }
            },
            where: {
                id: parseInt(id)
            }
        })
    }
}