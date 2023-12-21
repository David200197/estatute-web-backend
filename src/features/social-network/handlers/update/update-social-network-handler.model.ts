import { UpdateSocialNetworkCommand } from './update-social-network.command';

import { SocialNetworkModel } from '../../models/social-network.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface UpdateSocialNetworkHandlerModel
  extends ICommandHandler<UpdateSocialNetworkCommand> {
  execute(
    command: UpdateSocialNetworkCommand,
  ): Promise<Either<HttpException, SocialNetworkModel>>;
}
