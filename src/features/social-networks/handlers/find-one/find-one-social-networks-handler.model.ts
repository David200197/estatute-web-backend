import { FindOneSocialNetworksQuery } from './find-one-social-networks.query';

import { SocialNetworksModel } from '../../models/social-networks.model';
import { Maybe } from '@src/common/lib/maybe.lib';
export interface FindOneSocialNetworksHandlerModel {
  execute(
    command: FindOneSocialNetworksQuery,
  ): Promise<Maybe<SocialNetworksModel>>;
}
