import { Entity } from '@src/common/abstracts/entity.abstract';
import { StatuteModel, StatuteProperties } from '../models/statute.model';
import { UuidObjectValue } from '@src/common/object-value/uuid.object-value';

export class Statute extends Entity implements StatuteModel {
  private readonly _uuid: UuidObjectValue;
  constructor(options: StatuteProperties) {
    super();
    this._uuid = new UuidObjectValue(options.uuid);
  }

  get uuid() {
    return this._uuid.value;
  }
}
