import { createSymbolProvider } from '@src/common/utils/create-symbol-provider';
import { AboutUsRepositoryModel } from '../models/about-us-repository.model';
import { AboutUsLocalRepository } from '../repositories/about-us-local.repository';

export const [ABOUT_US_REPOSITORY_TOKEN, AboutUsRepositoryProvider] =
  createSymbolProvider<AboutUsRepositoryModel>(AboutUsLocalRepository);
