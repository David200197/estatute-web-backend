import { LoginAuthHandlerModel } from './login-auth-handler.model';
import { LoginAuthHandler } from './login-auth.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [LOGIN_AUTH_HANDLER_TOKEN, LoginAuthHandlerProvider] =
  createClassProvider<LoginAuthHandlerModel>(LoginAuthHandler);
