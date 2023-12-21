import { createProvider } from '@src/common/utils/create-provider';
import { SocialNetworkRepositoryModel } from '../models/social-network-repository.model';
import { SocialNetworkLocalRepository } from '../repositories/social-network-local.repository';

export const [
  SOCIAL_NETWORK_REPOSITORY_TOKEN,
  SocialNetworkRepositoryProvider,
] = createProvider<SocialNetworkRepositoryModel>(SocialNetworkLocalRepository);
