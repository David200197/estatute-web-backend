import { createProvider } from '@src/common/utils/create-provider';
import { EventUtilServiceModel } from '../models/event-util-service.model';
import { EventUtilService } from '../utils/event-util.service';

export const [EVENT_UTILS_SERVICE_TOKEN, EventUtilsServiceProvider] =
  createProvider<EventUtilServiceModel>(EventUtilService);
