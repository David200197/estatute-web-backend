import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { InvitationModel } from '../models/invitation.model';
import { InvitationsModel } from '../models/invitations.model';

export class Invitations
  extends EntityCollection<InvitationModel>
  implements InvitationsModel
{
  constructor(public readonly value: InvitationModel[]) {
    super(value);
  }
}
