import { createProvider } from '@src/common/utils/create-provider';
import { PhotoRepositoryModel } from '../models/photo-repository.model';
import { PhotoLocalRepository } from '../repositories/photo-local.repository';

export const [PHOTO_REPOSITORY_TOKEN, PhotoRepositoryProvider] =
  createProvider<PhotoRepositoryModel>(PhotoLocalRepository);
