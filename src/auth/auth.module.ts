import { Module } from '@nestjs/common';
import { HttpClientModule } from 'src/shared/http-client/http-client.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [HttpClientModule],
})
export class AuthModule {}
