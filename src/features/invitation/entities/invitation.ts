import { Entity } from '@src/common/abstracts/entity.abstract';
import { InvitationModel, InvitationProps } from '../models/invitation.model';
import { PropsToValueObjects } from '@src/common/interfaces/props-to-value-objects';
import { Uuid } from '@src/common/value-object/uuid.value-object';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class Invitation
  extends Entity<InvitationProps>
  implements InvitationModel
{
  private constructor(options: PropsToValueObjects<InvitationProps>) {
    super(options);
  }

  public static create(
    options: SelfPartial<InvitationProps, 'uuid'>,
  ): Invitation {
    const uuid = Uuid.create(options.uuid);
    return new Invitation({ uuid });
  }
}
