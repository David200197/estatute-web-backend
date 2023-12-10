import { CreateInvitationCommand } from './create-invitation.command';

import { InvitationModel } from '../../models/invitation.model';
import { ICommandHandler } from '@nestjs/cqrs';

export interface CreateInvitationHandlerModel
  extends ICommandHandler<CreateInvitationCommand> {
  execute(command: CreateInvitationCommand): Promise<InvitationModel>;
}
