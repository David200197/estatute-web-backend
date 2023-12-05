import { RemoveEventHandlerModel } from './remove-event-handler.model';
import { RemoveEventHandler } from './remove-event.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [REMOVE_EVENT_HANDLER_TOKEN, RemoveEventHandlerProvider] =
  createClassProvider<RemoveEventHandlerModel>(RemoveEventHandler);
