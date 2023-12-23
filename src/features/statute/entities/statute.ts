import { Entity } from '@src/common/abstracts/entity.abstract';
import { StatuteModel, StatuteProps } from '../models/statute.model';
import { Uuid } from '@src/common/value-object/uuid.value-object';
import { PropsToValueObjects } from '@src/common/interfaces/props-to-value-objects';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class Statute extends Entity<StatuteProps> implements StatuteModel {
  private constructor(options: PropsToValueObjects<StatuteProps>) {
    super(options);
  }

  public static create(options: SelfPartial<StatuteProps, 'uuid'>): Statute {
    const uuid = Uuid.create(options.uuid);
    return new Statute({ uuid });
  }
}
