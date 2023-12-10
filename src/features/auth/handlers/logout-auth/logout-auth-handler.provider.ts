import { LogoutAuthHandlerModel } from './logout-auth-handler.model';
import { LogoutAuthHandler } from './logout-auth.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [LOGOUT_AUTH_HANDLER_TOKEN, LogoutAuthHandlerProvider] =
  createProvider<LogoutAuthHandlerModel>(LogoutAuthHandler);
