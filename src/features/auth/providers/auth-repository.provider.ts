import { createSymbolProvider } from '@src/common/utils/create-symbol-provider';
import { AuthRepositoryModel } from '../models/auth-repository.model';
import { AuthLocalRepository } from '../repositories/auth-local.repository';

export const [AUTH_REPOSITORY_TOKEN, AuthRepositoryProvider] =
  createSymbolProvider<AuthRepositoryModel>(AuthLocalRepository);
