import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './filters/prisma-client-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');
    app.enableCors({
        origin: ['http://localhost:3000'],
    });
    const { httpAdapter } = app.get(HttpAdapterHost);
    app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

    const openapi = new DocumentBuilder()
        .setTitle('BotsOn API')
        .setDescription('Main API')
        .setVersion('0.1.0')
        .build();

    const document = SwaggerModule.createDocument(app, openapi);
    SwaggerModule.setup('api', app, document, {
        swaggerOptions: { defaultModelsExpandDepth: -1 },
    });

    await app.listen(8000);
}

bootstrap();
