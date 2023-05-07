import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ExtensionsModule } from './extensions/extensions.module';

@Module({
  imports: [UsersModule, ExtensionsModule],
})
export class AppModule {}
