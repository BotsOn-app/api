import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { ExtensionsModule } from './extensions/extensions.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [ExtensionsModule, AuthorsModule, PrismaModule],
})
export class AppModule {}
