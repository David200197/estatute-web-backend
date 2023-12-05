import { FindAllUserHandlerModel } from './find-all-user-handler.model';
import { FindAllUserHandler } from './find-all-user.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ALL_USER_HANDLER_TOKEN, FindAllUserHandlerProvider] =
  createClassProvider<FindAllUserHandlerModel>(FindAllUserHandler);
