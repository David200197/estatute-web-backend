import { RefreshAuthHandlerModel } from './refresh-auth-handler.model';
import { RefreshAuthHandler } from './refresh-auth.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [REFRESH_AUTH_HANDLER_TOKEN, RefreshAuthHandlerProvider] =
  createProvider<RefreshAuthHandlerModel>(RefreshAuthHandler);
