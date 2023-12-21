import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { InvitationModel } from '../models/invitation.model';
import { InvitationsModel } from '../models/invitations.model';
import { Invitation } from './invitation';

export class Invitations
  extends EntityCollection<any>
  implements InvitationsModel
{
  private constructor(public readonly value: InvitationModel[]) {
    super(value);
  }

  static instance(value: InvitationModel[]) {
    if (!Array.isArray(value))
      throw new TypeError('Invitations is not a array');
    return new Invitations(value.map((data) => new Invitation(data)));
  }
}
