import { Test, TestingModule } from '@nestjs/testing';
import { LoginAuthHandlerModel } from '../handlers/login-auth/login-auth-handler.model';
import {
  LOGIN_AUTH_HANDLER_TOKEN,
  LoginAuthHandlerProvider,
} from '../handlers/login-auth/login-auth-handler.provider';

describe('CreateAuthHandler', () => {
  let handler: LoginAuthHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginAuthHandlerProvider],
    }).compile();

    handler = module.get<LoginAuthHandlerModel>(LOGIN_AUTH_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
