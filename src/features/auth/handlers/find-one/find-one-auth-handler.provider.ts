import { FindOneAuthHandlerModel } from './find-one-auth-handler.model';
import { FindOneAuthHandler } from './find-one-auth.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ONE_AUTH_HANDLER_TOKEN, FindOneAuthHandlerProvider] =
  createClassProvider<FindOneAuthHandlerModel>(FindOneAuthHandler);
