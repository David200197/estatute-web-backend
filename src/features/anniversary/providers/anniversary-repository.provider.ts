import { createSymbolProvider } from '@src/common/utils/create-symbol-provider';
import { AnniversaryRepositoryModel } from '../models/anniversary-repository.model';
import { AnniversaryLocalRepository } from '../repositories/anniversary-local.repository';

export const [ANNIVERSARY_REPOSITORY_TOKEN, AnniversaryRepositoryProvider] =
  createSymbolProvider<AnniversaryRepositoryModel>(AnniversaryLocalRepository);
