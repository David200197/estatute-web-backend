import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { swaggerDocumentation } from './config/swagger.config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ConfigService } from '@nestjs/config';
import { APP_PORT } from '@src/config/app.const';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const logger = new Logger(`Server running`);

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  await swaggerDocumentation(app);
  app.enableCors();
  await app.listen(Number(config.get<number>(APP_PORT) || 3000));
  logger.log(await app.getUrl());
}

bootstrap().then(() => {
  console.log('Server Executed');
});
