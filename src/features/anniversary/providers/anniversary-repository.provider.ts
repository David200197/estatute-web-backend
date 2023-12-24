import { createProvider } from '@src/common/utils/create-provider';
import { AnniversaryRepositoryModel } from '../models/anniversary-repository.model';
import { AnniversaryMikroRepository } from '../repositories/anniversary-mikro.repository';

export const [ANNIVERSARY_REPOSITORY_TOKEN, AnniversaryRepositoryProvider] =
  createProvider<AnniversaryRepositoryModel>(AnniversaryMikroRepository);
