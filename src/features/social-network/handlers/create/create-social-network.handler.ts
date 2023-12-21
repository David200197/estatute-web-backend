import { CommandHandler } from '@nestjs/cqrs';
import { CreateSocialNetworkCommand } from './create-social-network.command';
import { SocialNetworkRepositoryModel } from '../../models/social-network-repository.model';
import { CreateSocialNetworkHandlerModel } from './create-social-network-handler.model';
import { Inject } from '@nestjs/common';
import { SOCIAL_NETWORK_REPOSITORY_TOKEN } from '../../providers/social-network-repository.provider';
import { SocialNetworkModel } from '../../models/social-network.model';

@CommandHandler(CreateSocialNetworkCommand)
export class CreateSocialNetworksHandler
  implements CreateSocialNetworkHandlerModel
{
  constructor(
    @Inject(SOCIAL_NETWORK_REPOSITORY_TOKEN)
    private socialNetworkRepository: SocialNetworkRepositoryModel,
  ) {}

  execute({
    createSocialNetworkDto: createSocialNetworksDto,
  }: CreateSocialNetworkCommand): Promise<SocialNetworkModel> {
    return this.socialNetworkRepository.create(createSocialNetworksDto);
  }
}
