import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  AnniversaryModel,
  AnniversaryProperties,
} from '../models/anniversary.model';
import { UuidObjectValue } from '@src/common/object-value/uuid.object-value';

export class Anniversary extends Entity implements AnniversaryModel {
  readonly _uuid: UuidObjectValue;
  constructor(options: AnniversaryProperties) {
    super();
    this._uuid = new UuidObjectValue(options.uuid);
  }

  get uuid() {
    return this._uuid.value;
  }
}
