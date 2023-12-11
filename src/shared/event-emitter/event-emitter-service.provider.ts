import { createProvider } from '@src/common/utils/create-provider';
import { EventEmitterServiceModel } from './event-emitter-service.model';
import { EventEmitter2Service } from './event-emitter-2.service';

export const [EVENT_EMITTER_SERVICE_TOKEN, EventEmitterServiceProvider] =
  createProvider<EventEmitterServiceModel>(EventEmitter2Service);
