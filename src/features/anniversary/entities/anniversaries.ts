import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { AnniversaryModel } from '../models/anniversary.model';
import { AnniversariesModel } from '../models/anniversaries.model';
import { Anniversary } from './anniversary';

export class Anniversaries
  extends EntityCollection<AnniversaryModel>
  implements AnniversariesModel
{
  private constructor(public readonly value: AnniversaryModel[]) {
    super(value);
  }

  static instance(value: AnniversaryModel[]) {
    if (!Array.isArray(value))
      throw new TypeError('Anniversaries is not a array');
    return new Anniversaries(value.map((data) => new Anniversary(data)));
  }
}
