import { RemoveSocialNetworkCommand } from './remove-social-network.command';

import { SocialNetworkModel } from '../../models/social-network.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface RemoveSocialNetworkHandlerModel
  extends ICommandHandler<RemoveSocialNetworkCommand> {
  execute(
    command: RemoveSocialNetworkCommand,
  ): Promise<Either<HttpException, SocialNetworkModel>>;
}
