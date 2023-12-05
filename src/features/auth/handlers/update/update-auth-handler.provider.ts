import { UpdateAuthHandlerModel } from './update-auth-handler.model';
import { UpdateAuthHandler } from './update-auth.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [UPDATE_AUTH_HANDLER_TOKEN, UpdateAuthHandlerProvider] =
  createClassProvider<UpdateAuthHandlerModel>(UpdateAuthHandler);
