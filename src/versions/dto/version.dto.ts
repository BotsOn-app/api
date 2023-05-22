import { ApiProperty } from '@nestjs/swagger';

export class CreateVersionDto {
    @ApiProperty({
        example: '0.0.1',
        description: 'semver formatted version'
    })
    semver: string;

    @ApiProperty({
        example: '511625c',
        description: 'Commit at where the extension will be created'
    })
    commit: string;
}

export class ActivateVersionDto {
    @ApiProperty({
        example: 'true',
        description: 'Set a version to active'
    })
    active: boolean;

    @ApiProperty({
        description: 'link to the extension archive'
    })
    link: string;

    @ApiProperty({
        description: 'checksum of the archive'
    })
    checksum: string;
}