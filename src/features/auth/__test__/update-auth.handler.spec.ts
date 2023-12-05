import { Test, TestingModule } from '@nestjs/testing';
import { AUTH_REPOSITORY_TOKEN } from '../providers/auth-repository.provider';
import { AuthLocalRepository } from '../repositories/auth-local.repository';
import {
  UPDATE_AUTH_HANDLER_TOKEN,
  UpdateAuthHandlerProvider,
} from '../handlers/update/update-auth-handler.provider';
import { UpdateAuthHandlerModel } from '../handlers/update/update-auth-handler.model';

describe('UpdateAuthHandler', () => {
  let handler: UpdateAuthHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateAuthHandlerProvider,
        { provide: AUTH_REPOSITORY_TOKEN, useClass: AuthLocalRepository },
      ],
    }).compile();

    handler = module.get<UpdateAuthHandlerModel>(UPDATE_AUTH_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
