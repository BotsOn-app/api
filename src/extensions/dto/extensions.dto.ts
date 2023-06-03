import { ApiProperty } from '@nestjs/swagger';

export class ExtensionsDto {
    @ApiProperty({
        description: 'Name of the extension'
    })
    name: string;

    @ApiProperty({
        description: 'Description of the extension'
    })
    description: string;

    @ApiProperty({
        example: 'https://github.com/vspcsi/test',
        description: 'GitHub link of the extension'
    })
    source: string;
}
