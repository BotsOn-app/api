import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExtensionsDto } from './dto/extensions.dto';
import { CreateVersionDto } from '../versions/dto/version.dto';
import { Version } from '.prisma/client';

@Injectable({})
export class ExtensionsService {
    constructor(private prisma: PrismaService) {
    }

    async createExtension(createExtensionDto: ExtensionsDto) {
        try {
            const extensions = await this.prisma.extension.create({
                data: {
                    author: {
                        create: {
                            name: createExtensionDto.author.name,
                            avatarUrl: createExtensionDto.author.avatarUrl,
                        },
                    },
                    downloads: 0,
                    verified: createExtensionDto.data.verified,
                    name: createExtensionDto.data.name,
                    description: createExtensionDto.data.description,
                    bannerUrl: createExtensionDto.data.banner.url,
                    source: createExtensionDto.data.source
                },
            });
        } catch (e) {
            console.log(e);
        }
    }

    async createVersion(parent_id: string, params: CreateVersionDto): Promise<Version> {
        return this.prisma.version.create({
            data: {
                semver: params.semver,
                commit: params.commit,
                extensionsId: parent_id,
                active: false
            }
        });
    }

    /**
     * Returns a promise containing all rows from Extensions table.
     * @return {Promise<any[]>} array of rows from Extensions table.
     */
    async getAllExtensions(): Promise<any[]> {
        return this.prisma.extension.findMany({
            include: {
                author: true,
            },
        });
    }

    /**
     * Returns a promise containing the row with the id specified as parameter.
     * @param {string} id of the row
     * @return {Promise<any[]>} array of rows from Extensions table.
     */
    async getExtensionById(id: string): Promise<any> {
        return this.prisma.extension.findUnique({
            include: {
                author: true,
            },
            where: {
                id: id,
            },
        });
    }

    async getExtensionCount(): Promise<any> {
        return this.prisma.extension.aggregate({
            _count: true,
        });
    }
}
