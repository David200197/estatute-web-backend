import { FindAllSocialNetworksHandlerModel } from './find-all-social-networks-handler.model';
import { FindAllSocialNetworksHandler } from './find-all-social-networks.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  FIND_ALL_SOCIAL_NETWORKS_HANDLER_TOKEN,
  FindAllSocialNetworksHandlerProvider,
] = createClassProvider<FindAllSocialNetworksHandlerModel>(
  FindAllSocialNetworksHandler,
);
