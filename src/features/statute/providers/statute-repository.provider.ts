import { createSymbolProvider } from '@src/common/utils/create-symbol-provider';
import { StatuteRepositoryModel } from '../models/statute-repository.model';
import { StatuteLocalRepository } from '../repositories/statute-local.repository';

export const [STATUTE_REPOSITORY_TOKEN, StatuteRepositoryProvider] =
  createSymbolProvider<StatuteRepositoryModel>(StatuteLocalRepository);
