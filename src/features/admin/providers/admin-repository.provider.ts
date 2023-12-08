import { createProvider } from '@src/common/utils/create-provider';
import { AdminRepositoryModel } from '../models/admin-repository.model';
import { AdminLocalRepository } from '../repositories/admin-local.repository';

export const [ADMIN_REPOSITORY_TOKEN, AdminRepositoryProvider] =
  createProvider<AdminRepositoryModel>(AdminLocalRepository);
