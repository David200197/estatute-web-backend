import { createProvider } from '@src/common/utils/create-provider';
import { SocialNetworkRepositoryModel } from '../models/social-network-repository.model';
import { SocialNetworkMikroRepository } from '../repositories/social-network-mikro.repository';

export const [
  SOCIAL_NETWORK_REPOSITORY_TOKEN,
  SocialNetworkRepositoryProvider,
] = createProvider<SocialNetworkRepositoryModel>(SocialNetworkMikroRepository);
