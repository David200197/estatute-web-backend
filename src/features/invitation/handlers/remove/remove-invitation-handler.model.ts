import { RemoveInvitationCommand } from './remove-invitation.command';
import { InvitationModel } from '../../models/invitation.model';
export interface RemoveInvitationHandlerModel {
  execute(command: RemoveInvitationCommand): Promise<InvitationModel>;
}
