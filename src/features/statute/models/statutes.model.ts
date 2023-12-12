import { EntityCollectionModel } from '@src/common/abstracts/entity-collection.abstracts';
import { StatuteModel } from './statute.model';

export interface StatutesModel extends EntityCollectionModel<StatuteModel> {
  readonly value: StatuteModel[];
}
