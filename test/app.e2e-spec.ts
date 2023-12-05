import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from '@src/common/filters/http-exception.filter';

describe('AuthController: register (e2e)', async () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );
    await app.init();
  });

  afterAll(async () => {
    if (app) await app.close();
  });

  describe('register', () => {
    it('Should return correct data', async () => {
      return request(app.getHttpServer())
        .get('/app')
        .expect((req) => expect(req.body.ok).toEqual(true))
        .expect(201);
    });
  });
});
