import { ExtensionsController } from './extensions.controller';
import { ExtensionsService } from './extensions.service';
import { Test } from '@nestjs/testing';
import { Extension } from '.prisma/client';
import { PrismaService } from '../prisma/prisma.service';

describe('ExtensionsController', () => {
    let controller: ExtensionsController;
    let service: ExtensionsService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [ExtensionsController],
            providers: [ExtensionsService, PrismaService]
        }).compile();

        controller = moduleRef.get<ExtensionsController>(ExtensionsController);
        service = moduleRef.get<ExtensionsService>(ExtensionsService);
    });

    describe('createExtension', () => {
        it('should return the created extension', async () => {
            const result: Extension = {
                id: '',
                name: '',
                description: '',
                authorId: '',
                downloads: 0,
                bannerUrl: '',
                verified: false,
                source: ''
            };

            jest.spyOn(service, 'createExtension').mockImplementation(() => new Promise((resolve) => resolve(result)));
            expect(await controller.createExtension({
                name: '',
                description: '',
                source: ''
            })).toBe(result);
        });
    });
});