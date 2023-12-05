import { FindAllSocialNetworksQuery } from './find-all-social-networks.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { SocialNetworkssModel } from '../../models/social-networkss.model';

export interface FindAllSocialNetworksHandlerModel {
  execute(
    command: FindAllSocialNetworksQuery,
  ): Promise<ResponseWithPaginate<SocialNetworkssModel>>;
}
