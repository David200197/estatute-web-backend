import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { AnniversaryModel } from '../models/anniversary.model';
import { AnniversariesModel } from '../models/anniversaries.model';

export class Anniversaries
  extends EntityCollection<AnniversaryModel>
  implements AnniversariesModel
{
  constructor(public readonly value: AnniversaryModel[]) {
    super(value);
  }
}
