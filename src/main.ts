import { Logger, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { ValidationFilter } from './validation/validation.filter';
import { ValidationException } from './validation/validation.exception';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

declare const module: any;

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const properties = errors.map((error) => error.property);
        const messages = errors.map((error) =>
          Object.values(error.constraints),
        );
        return new ValidationException({ properties, messages });
      },
    }),
  );
  app.useGlobalFilters(new ValidationFilter());
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
