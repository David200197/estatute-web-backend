import { createProvider } from '@src/common/utils/create-provider';
import { AnniversaryRepositoryModel } from '../models/anniversary-repository.model';
import { AnniversaryLocalRepository } from '../repositories/anniversary-local.repository';

export const [ANNIVERSARY_REPOSITORY_TOKEN, AnniversaryRepositoryProvider] =
  createProvider<AnniversaryRepositoryModel>(AnniversaryLocalRepository);
