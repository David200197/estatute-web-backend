import { RemoveEventHandlerModel } from './remove-event-handler.model';
import { RemoveEventHandler } from './remove-event.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [REMOVE_EVENT_HANDLER_TOKEN, RemoveEventHandlerProvider] =
  createProvider<RemoveEventHandlerModel>(RemoveEventHandler);
