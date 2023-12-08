import { createProvider } from '@src/common/utils/create-provider';
import { StatuteRepositoryModel } from '../models/statute-repository.model';
import { StatuteLocalRepository } from '../repositories/statute-local.repository';

export const [STATUTE_REPOSITORY_TOKEN, StatuteRepositoryProvider] =
  createProvider<StatuteRepositoryModel>(StatuteLocalRepository);
