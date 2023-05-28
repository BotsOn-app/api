import { ApiProperty } from '@nestjs/swagger';

export class VersionEntity {
    @ApiProperty({
        example: '0.0.1',
        description: 'semver formatted version'
    })
    semver: string;

    @ApiProperty({
        example: 'https://extensions.botson.net/example/0.0.1',
        description: 'Download link of the extension'
    })
    link?: string;

    @ApiProperty({
        example: '219e1a64438bb11cd94140ed15d780e5',
        description: 'MD5 checksum of the extension'
    })
    checksum?: string;

    @ApiProperty({
        example: true,
        description: 'Define if the version can be used or not'
    })
    active: boolean;
}
