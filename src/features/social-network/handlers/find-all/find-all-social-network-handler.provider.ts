import { FindAllSocialNetworkHandlerModel } from './find-all-social-network-handler.model';
import { FindAllSocialNetworkHandler } from './find-all-social-network.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  FIND_ALL_SOCIAL_NETWORK_HANDLER_TOKEN,
  FindAllSocialNetworkHandlerProvider,
] = createProvider<FindAllSocialNetworkHandlerModel>(
  FindAllSocialNetworkHandler,
);
