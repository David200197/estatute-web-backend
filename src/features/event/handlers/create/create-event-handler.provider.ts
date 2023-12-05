import { CreateEventHandlerModel } from './create-event-handler.model';
import { CreateEventHandler } from './create-event.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [CREATE_EVENT_HANDLER_TOKEN, CreateEventHandlerProvider] =
  createClassProvider<CreateEventHandlerModel>(CreateEventHandler);
