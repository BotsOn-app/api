import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExtensionsModule } from './extensions/extensions.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ExtensionsModule,
        AuthModule,
        PrismaModule,
    ],
})
export class AppModule {}
