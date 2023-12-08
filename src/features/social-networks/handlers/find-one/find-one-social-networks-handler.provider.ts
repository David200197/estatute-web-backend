import { FindOneSocialNetworksHandlerModel } from './find-one-social-networks-handler.model';
import { FindOneSocialNetworksHandler } from './find-one-social-networks.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  FIND_ONE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  FindOneSocialNetworksHandlerProvider,
] = createProvider<FindOneSocialNetworksHandlerModel>(
  FindOneSocialNetworksHandler,
);
