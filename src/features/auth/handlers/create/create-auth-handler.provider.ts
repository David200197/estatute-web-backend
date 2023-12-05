import { CreateAuthHandlerModel } from './create-auth-handler.model';
import { CreateAuthHandler } from './create-auth.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [CREATE_AUTH_HANDLER_TOKEN, CreateAuthHandlerProvider] =
  createClassProvider<CreateAuthHandlerModel>(CreateAuthHandler);
