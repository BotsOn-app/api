import { Injectable } from "@nestjs/common";
import { create } from "domain";
import { PrismaService } from "src/prisma/prisma.service";
import { ExtensionsDto } from "./dto/extensions.dto";

@Injectable({})
export class ExtensionsService {
    constructor(private prisma: PrismaService) { }

    async createExtension(createExtensionDto: ExtensionsDto) {
        try {
            const extensions = await this.prisma.extensions.create({
                data: {
                    author: {
                        create: {
                            name: createExtensionDto.author.name,
                            avatarUrl: createExtensionDto.author.avatarUrl
                        }
                    },
                    version: "1.0.0",
                    downloads: 0,
                    data: {
                        create: {
                            verified: createExtensionDto.data.verified,
                            name: createExtensionDto.data.name,
                            description: createExtensionDto.data.description,
                            changes: {
                                create: {
                                    title: "Initial Commit",
                                    content: "First upload of the extension newly created!",
                                    version: "1.0.0",
                                }
                            },
                            banner: {
                                create: {
                                    name: createExtensionDto.data.banner.name,
                                    url: createExtensionDto.data.banner.url
                                }
                            },
                        }
                    }
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    /**
    * Returns a promise containing all rows from Extensions table.
    * @return {Promise<any[]>} array of rows from Extensions table.
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

    /**
    * Returns a promise containing the row with the id specified as parameter.
    * @param {string} id of the row
    * @return {Promise<any[]>} array of rows from Extensions table.
    */
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
