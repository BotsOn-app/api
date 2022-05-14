import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ExtensionsDto } from "./dto/extensions.dto";
import { ExtensionsService } from "./extensions.service";

@Controller('extensions')
export class ExtensionsController {

    constructor(private extensionsService: ExtensionsService) { }


    /**
    * @return {Promise<Any[]>} getAllExtensions() from extension.service.ts
    */
    @Get()
    async getAllExtensions(): Promise<any[]> {
        return this.extensionsService.getAllExtensions()
    }

    /**
    * @param {string} params parameter of the route (':id')
    * @return {Promise<any>} return of getExtensionById() from extension.service.ts
    */
    @Get(':id')
    async getExtension(@Param('id') params: string): Promise<any> {
        return this.extensionsService.getExtensionById(params)
    }

    @Post()
    async createExtension(@Body() createExtensionDto: ExtensionsDto) {
        return this.extensionsService.createExtension(createExtensionDto)
    }

}
