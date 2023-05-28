import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Version } from '.prisma/client';
import { ActivateVersionDto } from './dto/version.dto';

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

    async activateVersion(extension_id: string, id: string, params: ActivateVersionDto): Promise<Version> {
        return this.prisma.version.update({
            where: {
                semver_extensionsId: {
                    semver: id,
                    extensionsId: extension_id
                }
            }, data: {
                active: params.active,
                link: params.link,
                checksum: params.checksum
            }
        });
    }
}
