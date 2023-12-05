import { FindAllStatuteHandlerModel } from './find-all-statute-handler.model';
import { FindAllStatuteHandler } from './find-all-statute.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ALL_STATUTE_HANDLER_TOKEN, FindAllStatuteHandlerProvider] =
  createClassProvider<FindAllStatuteHandlerModel>(FindAllStatuteHandler);
