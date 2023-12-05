import { FindOneSocialNetworksHandlerModel } from './find-one-social-networks-handler.model';
import { FindOneSocialNetworksHandler } from './find-one-social-networks.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  FIND_ONE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  FindOneSocialNetworksHandlerProvider,
] = createClassProvider<FindOneSocialNetworksHandlerModel>(
  FindOneSocialNetworksHandler,
);
