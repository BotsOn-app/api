import { Injectable } from '@nestjs/common';
import { ExtensionsDto } from './dto/extensions.dto';
import { CreateVersionDto } from '../versions/dto/version.dto';
import { Version, Extension } from '.prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class ExtensionsService {
    constructor(private prisma: PrismaService) {
    }

    async createExtension(createExtensionDto: ExtensionsDto): Promise<Extension> {
        return this.prisma.extension.create({
            data: {
                bannerUrl: '',
                authorId: '0',
                downloads: 0,
                verified: false,
                name: createExtensionDto.name,
                description: createExtensionDto.description,
                source: createExtensionDto.source
            },
        });
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

    async getAllExtensions(): Promise<any[]> {
        return this.prisma.extension.findMany({
            include: {
                author: true,
            },
        });
    }

    async getExtensionById(id: string): Promise<any> {
        return this.prisma.extension.findUnique({
            include: {
                author: true,
                versions: true
            },
            where: {
                id: id,
            },
        });
    }
}
