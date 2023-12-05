import { UpdateInvitationCommand } from './update-invitation.command';
import { InvitationModel } from '../../models/invitation.model';
export interface UpdateInvitationHandlerModel {
  execute(command: UpdateInvitationCommand): Promise<InvitationModel>;
}
