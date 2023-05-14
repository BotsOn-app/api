import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';
import { Users } from '@prisma/client';
import { ApiResponse } from '@nestjs/swagger';

@Controller('authors')
export class UsersController {
    constructor(private authorsService: UsersService) {
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Author found' })
    @ApiResponse({ status: 404, description: 'Author not found' })
    async getAuthor(@Param('id') params: string): Promise<Users | null> {
        return this.authorsService.getAuthor(params);
    }

    @Post()
    async addAuthor(@Body() authorDto: UsersDto) {
        return this.authorsService.addAuthor(authorDto);
    }
}
