import { Test, TestingModule } from '@nestjs/testing';
import { AUTH_REPOSITORY_TOKEN } from '../providers/auth-repository.provider';
import { AuthLocalRepository } from '../repositories/auth-local.repository';
import {
  FIND_ALL_AUTH_HANDLER_TOKEN,
  FindAllAuthHandlerProvider,
} from '../handlers/find-all/find-all-auth-handler.provider';
import { FindAllAuthHandlerModel } from '../handlers/find-all/find-all-auth-handler.model';

describe('FindAllAuthHandler', () => {
  let handler: FindAllAuthHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllAuthHandlerProvider,
        { provide: AUTH_REPOSITORY_TOKEN, useClass: AuthLocalRepository },
      ],
    }).compile();

    handler = module.get<FindAllAuthHandlerModel>(FIND_ALL_AUTH_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
