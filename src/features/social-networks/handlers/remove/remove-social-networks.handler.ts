import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveSocialNetworksCommand } from './remove-social-networks.command';
import { SocialNetworksRepositoryModel } from '../../models/social-networks-repository.model';
import { RemoveSocialNetworksHandlerModel } from './remove-social-networks-handler.model';
import { Inject } from '@nestjs/common';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../../providers/social-networks-repository.provider';
import { SocialNetworksModel } from '../../models/social-networks.model';

@CommandHandler(RemoveSocialNetworksCommand)
export class RemoveSocialNetworksHandler
  implements
    RemoveSocialNetworksHandlerModel,
    ICommandHandler<RemoveSocialNetworksCommand>
{
  constructor(
    @Inject(SOCIAL_NETWORKS_REPOSITORY_TOKEN)
    private socialNetworksRepository: SocialNetworksRepositoryModel,
  ) {}

  execute({
    filter,
  }: RemoveSocialNetworksCommand): Promise<SocialNetworksModel> {
    return this.socialNetworksRepository.removeOne(filter);
  }
}
