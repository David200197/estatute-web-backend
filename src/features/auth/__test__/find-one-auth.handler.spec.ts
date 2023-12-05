import { Test, TestingModule } from '@nestjs/testing';
import { AUTH_REPOSITORY_TOKEN } from '../providers/auth-repository.provider';
import { AuthLocalRepository } from '../repositories/auth-local.repository';
import {
  FIND_ONE_AUTH_HANDLER_TOKEN,
  FindOneAuthHandlerProvider,
} from '../handlers/find-one/find-one-auth-handler.provider';
import { FindOneAuthHandlerModel } from '../handlers/find-one/find-one-auth-handler.model';

describe('FindOneAuthHandler', () => {
  let handler: FindOneAuthHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneAuthHandlerProvider,
        { provide: AUTH_REPOSITORY_TOKEN, useClass: AuthLocalRepository },
      ],
    }).compile();

    handler = module.get<FindOneAuthHandlerModel>(FIND_ONE_AUTH_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
