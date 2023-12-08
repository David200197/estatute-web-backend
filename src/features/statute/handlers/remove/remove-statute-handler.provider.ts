import { RemoveStatuteHandlerModel } from './remove-statute-handler.model';
import { RemoveStatuteHandler } from './remove-statute.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [REMOVE_STATUTE_HANDLER_TOKEN, RemoveStatuteHandlerProvider] =
  createProvider<RemoveStatuteHandlerModel>(RemoveStatuteHandler);
