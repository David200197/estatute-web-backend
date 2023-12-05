import { Test, TestingModule } from '@nestjs/testing';
import { AUTH_REPOSITORY_TOKEN } from '../providers/auth-repository.provider';
import { AuthLocalRepository } from '../repositories/auth-local.repository';
import {
  CREATE_AUTH_HANDLER_TOKEN,
  CreateAuthHandlerProvider,
} from '../handlers/create/create-auth-handler.provider';
import { CreateAuthHandlerModel } from '../handlers/create/create-auth-handler.model';

describe('CreateAuthHandler', () => {
  let handler: CreateAuthHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateAuthHandlerProvider,
        { provide: AUTH_REPOSITORY_TOKEN, useClass: AuthLocalRepository },
      ],
    }).compile();

    handler = module.get<CreateAuthHandlerModel>(CREATE_AUTH_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
