import { FindAllSocialNetworksQuery } from './find-all-social-network.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { SocialNetworksModel } from '../../models/social-networks.model';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindAllSocialNetworkHandlerModel
  extends IQueryHandler<FindAllSocialNetworksQuery> {
  execute(
    command: FindAllSocialNetworksQuery,
  ): Promise<ResponseWithPaginate<SocialNetworksModel>>;
}
