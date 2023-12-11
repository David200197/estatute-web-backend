import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { StatuteModel } from '../models/statute.model';
import { StatutesModel } from '../models/statutes.model';

export class Statutes
  extends EntityCollection<StatuteModel>
  implements StatutesModel
{
  constructor(public readonly value: StatuteModel[]) {
    super(value);
  }
}
