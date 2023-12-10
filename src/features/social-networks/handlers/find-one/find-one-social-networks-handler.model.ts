import { FindOneSocialNetworksQuery } from './find-one-social-networks.query';

import { SocialNetworksModel } from '../../models/social-networks.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindOneSocialNetworksHandlerModel
  extends IQueryHandler<FindOneSocialNetworksQuery> {
  execute(
    command: FindOneSocialNetworksQuery,
  ): Promise<Either<HttpException, SocialNetworksModel>>;
}
