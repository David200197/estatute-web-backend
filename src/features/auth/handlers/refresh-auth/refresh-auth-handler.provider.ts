import { RefreshAuthHandlerModel } from './refresh-auth-handler.model';
import { RefreshAuthHandler } from './refresh-auth.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [REFRESH_AUTH_HANDLER_TOKEN, RefreshAuthHandlerProvider] =
  createClassProvider<RefreshAuthHandlerModel>(RefreshAuthHandler);
