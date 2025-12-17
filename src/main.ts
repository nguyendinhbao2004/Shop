import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { GlobalHttpExceptionFilter } from './common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // prefix API
  // 1. ENABLE CORS (Add this line)
  app.enableCors(); 

  app.useGlobalFilters(new GlobalHttpExceptionFilter())

  // ... rest of your config ...
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  app.setGlobalPrefix('api');

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Api Shop NestJS')
    .setDescription('API documentation')
    .setVersion('1.0')
    // nếu có JWT thì bật
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, { ignoreGlobalPrefix: false });
  // Serve Swagger UI under /api/swagger so it's grouped with your API prefix
  SwaggerModule.setup('api/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
