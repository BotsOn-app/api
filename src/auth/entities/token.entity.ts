import { ApiProperty } from '@nestjs/swagger';

export class TokenEntity {
    @ApiProperty({
        description: 'JWT Access token'
    })
    access_token: string;
}