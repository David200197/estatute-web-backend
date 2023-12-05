import { RemoveStatuteHandlerModel } from './remove-statute-handler.model';
import { RemoveStatuteHandler } from './remove-statute.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [REMOVE_STATUTE_HANDLER_TOKEN, RemoveStatuteHandlerProvider] =
  createClassProvider<RemoveStatuteHandlerModel>(RemoveStatuteHandler);
