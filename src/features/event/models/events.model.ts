import { EntityCollectionModel } from '@src/common/abstracts/entity-collection.abstracts';
import { EventModel } from './event.model';

export interface EventsModel extends EntityCollectionModel<EventModel> {
  readonly value: EventModel[];
}
