import { Entity } from '@src/common/abstracts/entity.abstract';
import { StatuteModel, StatuteProperties } from '../models/statute.model';
import { UuidValueObject } from '@src/common/value-object/uuid.value-object';

export class Statute extends Entity implements StatuteModel {
  public readonly uuid: string;
  constructor(options: StatuteProperties) {
    super();
    this.uuid = new UuidValueObject(options.uuid).value;
  }
}
