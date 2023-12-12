import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  AnniversaryModel,
  AnniversaryProperties,
} from '../models/anniversary.model';

export class Anniversary extends Entity implements AnniversaryModel {
  readonly uuid: string;
  constructor(options: AnniversaryProperties) {
    super();
    Object.assign(this, options);
  }
}
