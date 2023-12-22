import { Entity } from '@src/common/abstracts/entity.abstract';
import { StatuteModel, StatuteProperties } from '../models/statute.model';
import { UuidObjectValue } from '@src/common/object-value/uuid.object-value';

export class Statute extends Entity implements StatuteModel {
  public readonly uuid: string;
  constructor(options: StatuteProperties) {
    super();
    this.uuid = new UuidObjectValue(options.uuid).value;
  }
}
