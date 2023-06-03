import { Body, Controller, ForbiddenException, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ExtensionsDto } from './dto/extensions.dto';
import { ExtensionsService } from './extensions.service';
import { CreateVersionDto } from '../versions/dto/version.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VersionEntity } from '../versions/entities/version.entity';
import client, { Channel, connect, Connection, Message } from 'amqplib';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

interface QueueConfig {
    username: string;
    password: string;
    host: string;
    port: string;
}

@Controller('extensions')
export class ExtensionsController {
    private queueConfig: QueueConfig;
    private readonly queueURI: string;

    constructor(private extensionsService: ExtensionsService,
                private configService: ConfigService) {
        this.queueConfig = this.configService.get<QueueConfig>('queue', {
            username: 'prod',
            password: 'prod',
            host: 'localhost',
            port: '5672'
        });
        this.queueURI = `amqp://${this.queueConfig.username}:${this.queueConfig.password}@${this.queueConfig.host}:${this.queueConfig.port}`;
    }

    @Get()
    @ApiTags('extension')
    async getAllExtensions(): Promise<any[]> {
        return this.extensionsService.getAllExtensions();
    }

    @Get(':id')
    @ApiTags('extension')
    async getExtension(@Param('id') params: string): Promise<any> {
        return this.extensionsService.getExtensionById(params);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiTags('extension')
    @ApiOperation({ summary: 'Create an extension' })
    @ApiResponse({ status: 201, description: 'Extension was created' })
    async createExtension(@Req() req: any, @Body() createExtensionDto: ExtensionsDto) {
        return this.extensionsService.createExtension(req.user.id, createExtensionDto);
    }

    @Post(':extension_id')
    @UseGuards(JwtAuthGuard)
    @ApiTags('version')
    @ApiOperation({ summary: 'Create a version for the extension' })
    @ApiResponse({ status: 201, description: 'Version was created' })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    async createVersion(@Req() req: any, @Param('extension_id') id: string, @Body() params: CreateVersionDto): Promise<VersionEntity> {
        const extension = await this.extensionsService.getExtensionById(id);

        if (!extension || req.user.id !== extension.authorId)
            throw new ForbiddenException();

        const version = await this.extensionsService.createVersion(id, params);
        const connection = await connect(this.queueURI);
        const channel = await connection.createChannel();

        channel.sendToQueue('version', Buffer.from(JSON.stringify({
            extension: extension,
            commit: version.commit,
            semver: version.semver
        })));

        return {
            semver: version.semver,
            active: version.active
        };
    }
}
