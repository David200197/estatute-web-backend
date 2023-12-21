import { FindOneSocialNetworksQuery } from './find-one-social-network.query';

import { SocialNetworkModel } from '../../models/social-network.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindOneSocialNetworkHandlerModel
  extends IQueryHandler<FindOneSocialNetworksQuery> {
  execute(
    command: FindOneSocialNetworksQuery,
  ): Promise<Either<HttpException, SocialNetworkModel>>;
}
