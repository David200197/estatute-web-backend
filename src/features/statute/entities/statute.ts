import { Entity } from '@src/common/abstracts/entity.abstract';
import { StatuteModel, StatuteProperties } from '../models/statute.model';

export class Statute extends Entity implements StatuteModel {
  readonly uuid: string;
  constructor(options: StatuteProperties) {
    super();
    Object.assign(this, options);
  }
}
