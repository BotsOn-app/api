import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ExtensionsModule } from './extensions/extensions.module';
import { VersionModule } from './versions/version.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [ConfigModule.forRoot({
        load: [configuration],
        isGlobal: true
    }),
        UsersModule, ExtensionsModule, VersionModule, AuthModule],
})

export class AppModule {
}
