import { FindAllSocialNetworksHandlerModel } from './find-all-social-networks-handler.model';
import { FindAllSocialNetworksHandler } from './find-all-social-networks.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  FIND_ALL_SOCIAL_NETWORKS_HANDLER_TOKEN,
  FindAllSocialNetworksHandlerProvider,
] = createProvider<FindAllSocialNetworksHandlerModel>(
  FindAllSocialNetworksHandler,
);
