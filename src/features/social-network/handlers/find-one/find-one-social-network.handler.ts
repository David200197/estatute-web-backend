import { QueryHandler } from '@nestjs/cqrs';
import { FindOneSocialNetworksQuery } from './find-one-social-network.query';
import { SocialNetworkRepositoryModel } from '../../models/social-network-repository.model';
import { FindOneSocialNetworkHandlerModel } from './find-one-social-network-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { SOCIAL_NETWORK_REPOSITORY_TOKEN } from '../../providers/social-network-repository.provider';
import { SocialNetworkModel } from '../../models/social-network.model';
import { SocialNetworkNotFoundException } from '../../exceptions/social-network-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@QueryHandler(FindOneSocialNetworksQuery)
export class FindOneSocialNetworkHandler
  implements FindOneSocialNetworkHandlerModel
{
  constructor(
    @Inject(SOCIAL_NETWORK_REPOSITORY_TOKEN)
    private socialNetworkRepository: SocialNetworkRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneSocialNetworksQuery): Promise<
    Either<HttpException, SocialNetworkModel>
  > {
    const socialNetwork = await this.socialNetworkRepository.findOne(filter);
    if (!socialNetwork)
      return Either.left(new SocialNetworkNotFoundException());
    return Either.right(socialNetwork);
  }
}
