import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  AnniversaryModel,
  AnniversaryProperties,
} from '../models/anniversary.model';
import { UuidObjectValue } from '@src/common/object-value/uuid.object-value';

export class Anniversary extends Entity implements AnniversaryModel {
  public readonly uuid: string;
  constructor(options: AnniversaryProperties) {
    super();
    this.uuid = new UuidObjectValue(options.uuid).value;
  }
}
