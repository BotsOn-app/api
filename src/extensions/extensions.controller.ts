import { Body, Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { ExtensionsService } from "./extensions.service";
import { ExtensionsDto } from "./dto/extensions.dto";

@Controller('extensions')
export class ExtensionsController {

    constructor(private extensionsService: ExtensionsService) { }

    @Get()
    async getAllExtensions(): Promise<any[]> {
        return this.extensionsService.getAllExtensions()
    }

    @Get(':id')
    async getExtension(@Param('id') params: string): Promise<any> {
        return this.extensionsService.getExtensionById(params)
    }

    /*
    @Post()
    async createExtension() {
        return this.extensionsService.createExtension()
    }
    */

}