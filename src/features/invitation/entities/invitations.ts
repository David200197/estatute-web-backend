import { InvitationModel } from '../models/invitation.model';
import { InvitationsModel } from '../models/invitations.model';

export class Invitations implements InvitationsModel {
  constructor(public readonly value: InvitationModel[]) {}
}
