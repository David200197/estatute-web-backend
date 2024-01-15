import { Entity } from '@src/common/abstracts/entity.abstract';
import { InvitationModel, InvitationProps } from '../models/invitation.model';
import { PropsToValueObjects } from '@src/common/interfaces/props-to-value-objects';
import { Uuid } from '@src/common/value-object/uuid.value-object';
import { SelfPartial } from '@src/common/interfaces/self-partial';
import { Location } from './value-objects/location.value-object';
import { Name } from './value-objects/name.value-object';
import { Sponsors } from './value-objects/sponsors.value-object';
import { Type } from './value-objects/type.value-object';

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
    const location = Location.create(options.location);
    const name = Name.create(options.name);
    const sponsors = Sponsors.create(options.sponsors);
    const type = Type.create(options.type);
    return new Invitation({ uuid, location, name, sponsors, type });
  }
}
