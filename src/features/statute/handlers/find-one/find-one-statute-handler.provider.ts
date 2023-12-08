import { FindOneStatuteHandlerModel } from './find-one-statute-handler.model';
import { FindOneStatuteHandler } from './find-one-statute.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [FIND_ONE_STATUTE_HANDLER_TOKEN, FindOneStatuteHandlerProvider] =
  createProvider<FindOneStatuteHandlerModel>(FindOneStatuteHandler);
