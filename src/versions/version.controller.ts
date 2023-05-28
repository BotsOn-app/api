import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { VersionService } from './version.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VersionEntity } from './entities/version.entity';
import { ActivateVersionDto } from './dto/version.dto';

@Controller('extensions/:extension_id')
export class VersionController {
    constructor(private versionService: VersionService) {
    }

    @Get(':id')
    @ApiTags('version')
    @ApiOperation({ summary: 'Return relevant information about the version' })
    @ApiResponse({ status: 200, description: 'Version found', type: VersionEntity })
    @ApiResponse({ status: 404, description: 'Version not found' })
    async getVersion(@Param('extension_id') extension_id: string, @Param('id') id: string): Promise<VersionEntity> {
        const version = await this.versionService.getVersion(extension_id, id);

        return {
            semver: version.semver,
            link: (!version.link ? undefined : version.link),
            checksum: (!version.checksum ? undefined : version.checksum),
            active: version.active
        };
    }


    @Post(':id/state')
    @ApiTags('version')
    async activateVersion(@Param('extension_id') extension_id: string,
                          @Param('id') id: string,
                          @Body() params: ActivateVersionDto
    ): Promise<VersionEntity> {
        const version = await this.versionService.activateVersion(extension_id, id, params);

        return {
            semver: version.semver,
            link: (!version.link ? undefined : version.link),
            checksum: (!version.checksum ? undefined : version.checksum),
            active: version.active
        };
    }
}
