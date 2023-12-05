import { createSymbolProvider } from '@src/common/utils/create-symbol-provider';
import { EventRepositoryModel } from '../models/event-repository.model';
import { EventLocalRepository } from '../repositories/event-local.repository';

export const [EVENT_REPOSITORY_TOKEN, EventRepositoryProvider] =
  createSymbolProvider<EventRepositoryModel>(EventLocalRepository);
