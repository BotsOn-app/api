import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ExtensionsModule } from './extensions/extensions.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [UsersModule, ExtensionsModule, AuthModule, PrismaModule],
})
export class AppModule {}
