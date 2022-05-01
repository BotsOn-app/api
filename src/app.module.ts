import { Module } from '@nestjs/common';
import { ExtensionsModule } from './extensions/extensions.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ExtensionsModule, PrismaModule],
})
export class AppModule { }
