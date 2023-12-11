import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { AnniversaryModel } from '../models/anniversary.model';
import { AnniversarysModel } from '../models/anniversarys.model';

export class Anniversarys
  extends EntityCollection<AnniversaryModel>
  implements AnniversarysModel
{
  constructor(public readonly value: AnniversaryModel[]) {
    super(value);
  }
}
