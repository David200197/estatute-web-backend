import { createProvider } from '@src/common/utils/create-provider';
import { SocialNetworksRepositoryModel } from '../models/social-networks-repository.model';
import { SocialNetworksLocalRepository } from '../repositories/social-networks-local.repository';

export const [
  SOCIAL_NETWORKS_REPOSITORY_TOKEN,
  SocialNetworksRepositoryProvider,
] = createProvider<SocialNetworksRepositoryModel>(
  SocialNetworksLocalRepository,
);
