import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  AnniversaryModel,
  AnniversaryProps,
} from '../models/anniversary.model';
import { Uuid } from '@src/common/value-object/uuid.value-object';
import { PropsToValueObjects } from '@src/common/interfaces/props-to-value-objects';
import { SelfPartial } from '@src/common/interfaces/self-partial';
import { DateValue } from './value-object/date.value-object';
import { Description } from './value-object/description.value-object';

export class Anniversary
  extends Entity<AnniversaryProps>
  implements AnniversaryModel
{
  private constructor(options: PropsToValueObjects<AnniversaryProps>) {
    super(options);
  }

  public static create(
    options: SelfPartial<AnniversaryProps, 'uuid'>,
  ): Anniversary {
    const uuid = Uuid.create(options.uuid);
    const date = DateValue.create(options.date);
    const description = Description.create(options.description);
    return new Anniversary({ uuid, date, description });
  }
}
