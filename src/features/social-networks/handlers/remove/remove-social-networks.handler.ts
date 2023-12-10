import { CommandHandler } from '@nestjs/cqrs';
import { RemoveSocialNetworksCommand } from './remove-social-networks.command';
import { SocialNetworksRepositoryModel } from '../../models/social-networks-repository.model';
import { RemoveSocialNetworksHandlerModel } from './remove-social-networks-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../../providers/social-networks-repository.provider';
import { SocialNetworksModel } from '../../models/social-networks.model';
import { SocialNetworksNotFoundException } from '../../exceptions/social-networks-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(RemoveSocialNetworksCommand)
export class RemoveSocialNetworksHandler
  implements RemoveSocialNetworksHandlerModel
{
  constructor(
    @Inject(SOCIAL_NETWORKS_REPOSITORY_TOKEN)
    private socialNetworksRepository: SocialNetworksRepositoryModel,
  ) {}

  async execute({
    filter,
  }: RemoveSocialNetworksCommand): Promise<
    Either<HttpException, SocialNetworksModel>
  > {
    const socialNetworks = await this.socialNetworksRepository.removeOne(
      filter,
    );
    if (!socialNetworks)
      return Either.left(new SocialNetworksNotFoundException());
    return Either.right(socialNetworks);
  }
}
