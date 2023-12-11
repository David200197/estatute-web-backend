import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  AnniversaryModel,
  AnniversaryProperties,
} from '../models/anniversary.model';

export class Anniversary
  extends Entity<AnniversaryModel>
  implements AnniversaryModel
{
  constructor(options: AnniversaryProperties) {
    super(options);
    Object.assign(this, options);
  }
}
