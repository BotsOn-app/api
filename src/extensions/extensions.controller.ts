import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExtensionsDto } from './dto/extensions.dto';
import { ExtensionsService } from './extensions.service';
import { CreateVersionDto } from '../versions/dto/version.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VersionEntity } from '../versions/entities/version.entity';


@Controller('extensions')
export class ExtensionsController {
    constructor(private extensionsService: ExtensionsService) {
    }

    /**
     * @return {Promise<Any[]>} getAllExtensions() from extension.service.ts
     */
    @Get()
    @ApiTags('extension')
    async getAllExtensions(): Promise<any[]> {
        return this.extensionsService.getAllExtensions();
    }

    /**
     * @param {string} params parameter of the route (':id')
     * @return {Promise<any>} return of getExtensionById() from extension.service.ts
     */
    @Get(':id')
    @ApiTags('extension')
    async getExtension(@Param('id') params: string): Promise<any> {
        return this.extensionsService.getExtensionById(params);
    }

    /* Just a stupid idea, I think we can just do len() of the req body so..
    @Get('count')
    async getExtensionCount(): Promise<any> {
        return this.extensionsService.getExtensionCount();
    }*/

    @Post()
    @ApiTags('extension')
    async createExtension(@Body() createExtensionDto: ExtensionsDto) {
        return this.extensionsService.createExtension(createExtensionDto);
    }

    @Post(':extension_id')
    @ApiTags('version')
    @ApiOperation({ summary: 'Create a version for the extension' })
    @ApiResponse({ status: 201, description: 'Version was created' })
    async createVersion(@Param('extension_id') id: string, @Body() params: CreateVersionDto): Promise<VersionEntity> {
        const version = await this.extensionsService.createVersion(id, params);

        return {
            semver: version.semver,
            active: version.active
        };
    }

    /*
    @Put(':id')
    async addChanges(
        @Param('id') params: string,
        @Body() createChangesDto: ChangesDto,
    ) {
        return this.extensionsService.addChanges(params, createChangesDto);
    }
    */
}
