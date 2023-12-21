import { createProvider } from '@src/common/utils/create-provider';
import { AboutUsRepositoryModel } from '../models/about-us-repository.model';
import { AboutUsMikroRepository } from '../repositories/about-us-mikro.repository';

export const [ABOUT_US_REPOSITORY_TOKEN, AboutUsRepositoryProvider] =
  createProvider<AboutUsRepositoryModel>(AboutUsMikroRepository);
