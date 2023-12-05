import { FindOneStatuteHandlerModel } from './find-one-statute-handler.model';
import { FindOneStatuteHandler } from './find-one-statute.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ONE_STATUTE_HANDLER_TOKEN, FindOneStatuteHandlerProvider] =
  createClassProvider<FindOneStatuteHandlerModel>(FindOneStatuteHandler);
