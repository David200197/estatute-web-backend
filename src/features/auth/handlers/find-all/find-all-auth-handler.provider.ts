import { FindAllAuthHandlerModel } from './find-all-auth-handler.model';
import { FindAllAuthHandler } from './find-all-auth.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ALL_AUTH_HANDLER_TOKEN, FindAllAuthHandlerProvider] =
  createClassProvider<FindAllAuthHandlerModel>(FindAllAuthHandler);
