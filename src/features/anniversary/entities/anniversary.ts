import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  AnniversaryModel,
  AnniversaryProps,
} from '../models/anniversary.model';
import { Uuid } from '@src/common/value-object/uuid.value-object';
import { PropsToValueObjects } from '@src/common/interfaces/props-to-value-objects';
import { SelfPartial } from '@src/common/interfaces/self-partial';

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
    return new Anniversary({ uuid });
  }
}
