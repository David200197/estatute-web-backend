import { createProvider } from '@src/common/utils/create-provider';
import { EventEmitterHelperModel } from './event-emitter-helper.model';
import { EventEmitter2Helper } from './event-emitter-2.helper';

export const [EVENT_EMITTER_HELPER_TOKEN, EventEmitterHelperProvider] =
  createProvider<EventEmitterHelperModel>(EventEmitter2Helper);
