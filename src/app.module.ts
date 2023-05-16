import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ExtensionsModule } from './extensions/extensions.module';
import { VersionModule } from './versions/version.module';

@Module({
    imports: [UsersModule, ExtensionsModule, VersionModule],
})

export class AppModule {
}
