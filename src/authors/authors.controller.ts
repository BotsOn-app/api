import { Controller, Get, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
    constructor(private authorsService: AuthorsService) {}

    @Get(':id')
    async getAuthor(@Param('id') params: string): Promise<any> {
        return this.authorsService.getAuthor(params);
    }
}
