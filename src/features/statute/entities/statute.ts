import { Entity } from '@src/common/abstracts/entity.abstract';
import { StatuteModel, StatuteProperties } from '../models/statute.model';

export class Statute extends Entity<StatuteModel> implements StatuteModel {
  constructor(options: StatuteProperties) {
    super(options);
    Object.assign(this, options);
  }
}
