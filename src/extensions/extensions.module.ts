import { Module } from '@nestjs/common';
import { ExtensionsController } from './extensions.controller';
import { ExtensionsService } from './extensions.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule],
    controllers: [ExtensionsController],
    providers: [ExtensionsService],
})
export class ExtensionsModule {
}
