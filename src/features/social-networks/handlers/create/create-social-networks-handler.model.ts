import { CreateSocialNetworksCommand } from './create-social-networks.command';

import { SocialNetworksModel } from '../../models/social-networks.model';
import { ICommandHandler } from '@nestjs/cqrs';

export interface CreateSocialNetworksHandlerModel
  extends ICommandHandler<CreateSocialNetworksCommand> {
  execute(command: CreateSocialNetworksCommand): Promise<SocialNetworksModel>;
}
