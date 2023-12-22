import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  AnniversaryModel,
  AnniversaryProperties,
} from '../models/anniversary.model';
import { UuidValueObject } from '@src/common/value-object/uuid.value-object';

export class Anniversary extends Entity implements AnniversaryModel {
  public readonly uuid: string;
  constructor(options: AnniversaryProperties) {
    super();
    this.uuid = new UuidValueObject(options.uuid).value;
  }
}
