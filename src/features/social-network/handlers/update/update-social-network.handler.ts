import { CommandHandler } from '@nestjs/cqrs';
import { UpdateSocialNetworkCommand } from './update-social-network.command';
import { SocialNetworkRepositoryModel } from '../../models/social-network-repository.model';
import { UpdateSocialNetworkHandlerModel } from './update-social-network-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { SOCIAL_NETWORK_REPOSITORY_TOKEN } from '../../providers/social-network-repository.provider';
import { SocialNetworkModel } from '../../models/social-network.model';
import { SocialNetworkNotFoundException } from '../../exceptions/social-network-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(UpdateSocialNetworkCommand)
export class UpdateSocialNetworkHandler
  implements UpdateSocialNetworkHandlerModel
{
  constructor(
    @Inject(SOCIAL_NETWORK_REPOSITORY_TOKEN)
    private socialNetworkRepository: SocialNetworkRepositoryModel,
  ) {}

  async execute({
    filter,
    updateSocialNetworksDto,
  }: UpdateSocialNetworkCommand): Promise<
    Either<HttpException, SocialNetworkModel>
  > {
    const socialNetwork = await this.socialNetworkRepository.updateOne(
      filter,
      updateSocialNetworksDto,
    );
    if (!socialNetwork)
      return Either.left(new SocialNetworkNotFoundException());
    return Either.right(socialNetwork);
  }
}
