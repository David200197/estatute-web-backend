import { CommandHandler } from '@nestjs/cqrs';
import { RemoveSocialNetworkCommand } from './remove-social-network.command';
import { SocialNetworkRepositoryModel } from '../../models/social-network-repository.model';
import { RemoveSocialNetworkHandlerModel } from './remove-social-network-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { SOCIAL_NETWORK_REPOSITORY_TOKEN } from '../../providers/social-network-repository.provider';
import { SocialNetworkModel } from '../../models/social-network.model';
import { SocialNetworkNotFoundException } from '../../exceptions/social-network-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(RemoveSocialNetworkCommand)
export class RemoveSocialNetworksHandler
  implements RemoveSocialNetworkHandlerModel
{
  constructor(
    @Inject(SOCIAL_NETWORK_REPOSITORY_TOKEN)
    private socialNetworkRepository: SocialNetworkRepositoryModel,
  ) {}

  async execute({
    filter,
  }: RemoveSocialNetworkCommand): Promise<
    Either<HttpException, SocialNetworkModel>
  > {
    const socialNetwork = await this.socialNetworkRepository.removeOne(filter);
    if (!socialNetwork)
      return Either.left(new SocialNetworkNotFoundException());
    return Either.right(socialNetwork);
  }
}
