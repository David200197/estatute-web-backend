import { FindOneUserHandlerModel } from './find-one-user-handler.model';
import { FindOneUserHandler } from './find-one-user.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ONE_USER_HANDLER_TOKEN, FindOneUserHandlerProvider] =
  createClassProvider<FindOneUserHandlerModel>(FindOneUserHandler);
