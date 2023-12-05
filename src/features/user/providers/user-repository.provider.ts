import { createSymbolProvider } from '@src/common/utils/create-symbol-provider';
import { UserRepositoryModel } from '../models/user-repository.model';
import { UserLocalRepository } from '../repositories/user-local.repository';

export const [USER_REPOSITORY_TOKEN, UserRepositoryProvider] =
  createSymbolProvider<UserRepositoryModel>(UserLocalRepository);
