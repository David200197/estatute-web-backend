import { createSymbolProvider } from '@src/common/utils/create-symbol-provider';
import { AdminRepositoryModel } from '../models/admin-repository.model';
import { AdminLocalRepository } from '../repositories/admin-local.repository';

export const [ADMIN_REPOSITORY_TOKEN, AdminRepositoryProvider] =
  createSymbolProvider<AdminRepositoryModel>(AdminLocalRepository);
