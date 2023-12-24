import { createProvider } from '@src/common/utils/create-provider';
import { EventRepositoryModel } from '../models/event-repository.model';
import { EventMikroRepository } from '../repositories/event-mikro.repository';

export const [EVENT_REPOSITORY_TOKEN, EventRepositoryProvider] =
  createProvider<EventRepositoryModel>(EventMikroRepository);
