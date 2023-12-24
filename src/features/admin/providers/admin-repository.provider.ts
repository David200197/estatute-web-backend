import { createProvider } from '@src/common/utils/create-provider';
import { AdminRepositoryModel } from '../models/admin-repository.model';
import { AdminMikroRepository } from '../repositories/admin-mikro.repository';

export const [ADMIN_REPOSITORY_TOKEN, AdminRepositoryProvider] =
  createProvider<AdminRepositoryModel>(AdminMikroRepository);
