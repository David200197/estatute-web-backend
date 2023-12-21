import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { StatuteModel } from '../models/statute.model';
import { StatutesModel } from '../models/statutes.model';
import { Statute } from './statute';

export class Statutes
  extends EntityCollection<StatuteModel>
  implements StatutesModel
{
  private constructor(public readonly value: StatuteModel[]) {
    super(value);
  }

  static instance(value: StatuteModel[]) {
    if (!Array.isArray(value)) throw new TypeError('Statutes is not a array');
    return new Statutes(value.map((data) => new Statute(data)));
  }
}
