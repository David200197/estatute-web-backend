import { UpdateSocialNetworksCommand } from './update-social-networks.command';

import { SocialNetworksModel } from '../../models/social-networks.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface UpdateSocialNetworksHandlerModel
  extends ICommandHandler<UpdateSocialNetworksCommand> {
  execute(
    command: UpdateSocialNetworksCommand,
  ): Promise<Either<HttpException, SocialNetworksModel>>;
}
