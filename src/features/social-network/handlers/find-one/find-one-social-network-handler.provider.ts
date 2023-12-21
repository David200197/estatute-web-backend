import { FindOneSocialNetworkHandlerModel } from './find-one-social-network-handler.model';
import { FindOneSocialNetworkHandler } from './find-one-social-network.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  FIND_ONE_SOCIAL_NETWORK_HANDLER_TOKEN,
  FindOneSocialNetworkHandlerProvider,
] = createProvider<FindOneSocialNetworkHandlerModel>(
  FindOneSocialNetworkHandler,
);
