import { FindAllSocialNetworksQuery } from './find-all-social-networks.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { SocialNetworkssModel } from '../../models/social-networkss.model';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindAllSocialNetworksHandlerModel
  extends IQueryHandler<FindAllSocialNetworksQuery> {
  execute(
    command: FindAllSocialNetworksQuery,
  ): Promise<ResponseWithPaginate<SocialNetworkssModel>>;
}
