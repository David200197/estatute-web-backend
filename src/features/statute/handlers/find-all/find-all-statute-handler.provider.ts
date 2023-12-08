import { FindAllStatuteHandlerModel } from './find-all-statute-handler.model';
import { FindAllStatuteHandler } from './find-all-statute.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [FIND_ALL_STATUTE_HANDLER_TOKEN, FindAllStatuteHandlerProvider] =
  createProvider<FindAllStatuteHandlerModel>(FindAllStatuteHandler);
