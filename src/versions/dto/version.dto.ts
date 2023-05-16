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
