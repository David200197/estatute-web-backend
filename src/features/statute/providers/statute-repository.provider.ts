import { createProvider } from '@src/common/utils/create-provider';
import { StatuteRepositoryModel } from '../models/statute-repository.model';
import { StatuteMikroRepository } from '../repositories/statute-mikro.repository';

export const [STATUTE_REPOSITORY_TOKEN, StatuteRepositoryProvider] =
  createProvider<StatuteRepositoryModel>(StatuteMikroRepository);
