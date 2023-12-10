import { RemoveSocialNetworksCommand } from './remove-social-networks.command';

import { SocialNetworksModel } from '../../models/social-networks.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface RemoveSocialNetworksHandlerModel
  extends ICommandHandler<RemoveSocialNetworksCommand> {
  execute(
    command: RemoveSocialNetworksCommand,
  ): Promise<Either<HttpException, SocialNetworksModel>>;
}
