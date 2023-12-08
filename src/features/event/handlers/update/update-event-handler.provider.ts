import { UpdateEventHandlerModel } from './update-event-handler.model';
import { UpdateEventHandler } from './update-event.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [UPDATE_EVENT_HANDLER_TOKEN, UpdateEventHandlerProvider] =
  createProvider<UpdateEventHandlerModel>(UpdateEventHandler);
