import { CreateSocialNetworkCommand } from './create-social-network.command';

import { SocialNetworkModel } from '../../models/social-network.model';
import { ICommandHandler } from '@nestjs/cqrs';

export interface CreateSocialNetworkHandlerModel
  extends ICommandHandler<CreateSocialNetworkCommand> {
  execute(command: CreateSocialNetworkCommand): Promise<SocialNetworkModel>;
}
