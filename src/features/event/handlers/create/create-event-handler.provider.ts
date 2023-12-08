import { CreateEventHandlerModel } from './create-event-handler.model';
import { CreateEventHandler } from './create-event.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [CREATE_EVENT_HANDLER_TOKEN, CreateEventHandlerProvider] =
  createProvider<CreateEventHandlerModel>(CreateEventHandler);
