import { QueryHandler } from '@nestjs/cqrs';
import { FindOneSocialNetworksQuery } from './find-one-social-networks.query';
import { SocialNetworksRepositoryModel } from '../../models/social-networks-repository.model';
import { FindOneSocialNetworksHandlerModel } from './find-one-social-networks-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../../providers/social-networks-repository.provider';
import { SocialNetworksModel } from '../../models/social-networks.model';
import { SocialNetworksNotFoundException } from '../../exceptions/social-networks-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@QueryHandler(FindOneSocialNetworksQuery)
export class FindOneSocialNetworksHandler
  implements FindOneSocialNetworksHandlerModel
{
  constructor(
    @Inject(SOCIAL_NETWORKS_REPOSITORY_TOKEN)
    private socialNetworksRepository: SocialNetworksRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneSocialNetworksQuery): Promise<
    Either<HttpException, SocialNetworksModel>
  > {
    const socialNetworks = await this.socialNetworksRepository.findOne(filter);
    if (!socialNetworks)
      return Either.left(new SocialNetworksNotFoundException());
    return Either.right(socialNetworks);
  }
}
