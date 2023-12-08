import { LoginAuthHandlerModel } from './login-auth-handler.model';
import { LoginAuthHandler } from './login-auth.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [LOGIN_AUTH_HANDLER_TOKEN, LoginAuthHandlerProvider] =
  createProvider<LoginAuthHandlerModel>(LoginAuthHandler);
