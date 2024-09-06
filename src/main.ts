import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('v1/');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Task Manager API')
    .setDescription('API documentation for Task Manager')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('v1/docs', app, document, {
    customCss:
      '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
    customCssUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
    ],
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });
  app.enableCors({
    allowedHeaders: ['Authorization', 'Content-Type'],
    origin: '*',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(+configService.get('APP_PORT') || 3000);
}
bootstrap();
