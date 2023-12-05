import { RemoveAuthHandlerModel } from './remove-auth-handler.model';
import { RemoveAuthHandler } from './remove-auth.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [REMOVE_AUTH_HANDLER_TOKEN, RemoveAuthHandlerProvider] =
  createClassProvider<RemoveAuthHandlerModel>(RemoveAuthHandler);
