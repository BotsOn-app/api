import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorDto } from './dto/authors.dto';

@Controller('authors')
export class AuthorsController {
    constructor(private authorsService: AuthorsService) {}

    @Get(':id')
    async getAuthor(@Param('id') params: string): Promise<any> {
        return this.authorsService.getAuthor(params);
    }

    @Post()
    async addAuthor(@Body() authorDto: AuthorDto) {
        return this.authorsService.addAuthor(authorDto);
    }
}
