import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Version } from '.prisma/client';

@Injectable({})
export class VersionService {
    constructor(private prisma: PrismaService) {

    }

    async getVersion(extension_id: string, id: string): Promise<Version> {
        return this.prisma.version.findUniqueOrThrow({
            where: {
                semver_extensionsId: {
                    semver: id,
                    extensionsId: extension_id
                }
            }
        });
    }
}
