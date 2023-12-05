import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateSocialNetworksCommand } from './update-social-networks.command';
import { SocialNetworksRepositoryModel } from '../../models/social-networks-repository.model';
import { UpdateSocialNetworksHandlerModel } from './update-social-networks-handler.model';
import { Inject } from '@nestjs/common';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../../providers/social-networks-repository.provider';
import { SocialNetworksModel } from '../../models/social-networks.model';

@CommandHandler(UpdateSocialNetworksCommand)
export class UpdateSocialNetworksHandler
  implements
    UpdateSocialNetworksHandlerModel,
    ICommandHandler<UpdateSocialNetworksCommand>
{
  constructor(
    @Inject(SOCIAL_NETWORKS_REPOSITORY_TOKEN)
    private socialNetworksRepository: SocialNetworksRepositoryModel,
  ) {}

  async execute({
    filter,
    updateSocialNetworksDto,
  }: UpdateSocialNetworksCommand): Promise<SocialNetworksModel> {
    return this.socialNetworksRepository.updateOne(
      filter,
      updateSocialNetworksDto,
    );
  }
}
