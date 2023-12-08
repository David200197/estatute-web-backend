import { createProvider } from '@src/common/utils/create-provider';
import { AboutUsRepositoryModel } from '../models/about-us-repository.model';
import { AboutUsLocalRepository } from '../repositories/about-us-local.repository';

export const [ABOUT_US_REPOSITORY_TOKEN, AboutUsRepositoryProvider] =
  createProvider<AboutUsRepositoryModel>(AboutUsLocalRepository);
