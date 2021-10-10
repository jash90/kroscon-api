import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Kroscon API')
    .setLicense('MIT License', 'https://opensource.org/licenses/MIT')
    .setDescription('API Documentation')
    .setVersion('1.1')
    .addBearerAuth()
    .addServer('http://localhost:3000/', 'http')
    .addServer('https://localhost:3000/', 'https')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);
}
