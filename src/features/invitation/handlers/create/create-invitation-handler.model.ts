import { CreateInvitationCommand } from './create-invitation.command';
import { InvitationModel } from '../../models/invitation.model';
export interface CreateInvitationHandlerModel {
  execute(command: CreateInvitationCommand): Promise<InvitationModel>;
}
