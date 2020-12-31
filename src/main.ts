import {Logger, ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import helmet from 'helmet';
import {AppModule} from './app.module';
import {setupSwagger} from './swagger';

require('dotenv').config();

declare const module: any;

const port = process.env.APP_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.enableCors();

  setupSwagger(app);

  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
  console.log(`Server running on http://localhost:${port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
