import { UpdateInvitationCommand } from './update-invitation.command';

import { InvitationModel } from '../../models/invitation.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface UpdateInvitationHandlerModel
  extends ICommandHandler<UpdateInvitationCommand> {
  execute(
    command: UpdateInvitationCommand,
  ): Promise<Either<HttpException, InvitationModel>>;
}
