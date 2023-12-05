import { Test, TestingModule } from '@nestjs/testing';
import { AUTH_REPOSITORY_TOKEN } from '../providers/auth-repository.provider';
import { AuthLocalRepository } from '../repositories/auth-local.repository';
import {
  REMOVE_AUTH_HANDLER_TOKEN,
  RemoveAuthHandlerProvider,
} from '../handlers/remove/remove-auth-handler.provider';
import { RemoveAuthHandlerModel } from '../handlers/remove/remove-auth-handler.model';

describe('RemoveAuthHandler', () => {
  let handler: RemoveAuthHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveAuthHandlerProvider,
        { provide: AUTH_REPOSITORY_TOKEN, useClass: AuthLocalRepository },
      ],
    }).compile();

    handler = module.get<RemoveAuthHandlerModel>(REMOVE_AUTH_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
