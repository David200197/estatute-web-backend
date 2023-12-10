import { RemoveInvitationCommand } from './remove-invitation.command';

import { InvitationModel } from '../../models/invitation.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface RemoveInvitationHandlerModel
  extends ICommandHandler<RemoveInvitationCommand> {
  execute(
    command: RemoveInvitationCommand,
  ): Promise<Either<HttpException, InvitationModel>>;
}
