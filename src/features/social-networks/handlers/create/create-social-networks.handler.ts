import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateSocialNetworksCommand } from './create-social-networks.command';
import { SocialNetworksRepositoryModel } from '../../models/social-networks-repository.model';
import { CreateSocialNetworksHandlerModel } from './create-social-networks-handler.model';
import { Inject } from '@nestjs/common';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../../providers/social-networks-repository.provider';
import { SocialNetworksModel } from '../../models/social-networks.model';

@CommandHandler(CreateSocialNetworksCommand)
export class CreateSocialNetworksHandler
  implements
    CreateSocialNetworksHandlerModel,
    ICommandHandler<CreateSocialNetworksCommand>
{
  constructor(
    @Inject(SOCIAL_NETWORKS_REPOSITORY_TOKEN)
    private socialNetworksRepository: SocialNetworksRepositoryModel,
  ) {}

  execute({
    createSocialNetworksDto,
  }: CreateSocialNetworksCommand): Promise<SocialNetworksModel> {
    return this.socialNetworksRepository.create(createSocialNetworksDto);
  }
}
