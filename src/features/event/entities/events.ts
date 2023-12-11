import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { EventModel } from '../models/event.model';
import { EventsModel } from '../models/events.model';

export class Events
  extends EntityCollection<EventModel>
  implements EventsModel
{
  constructor(public readonly value: EventModel[]) {
    super(value);
  }
}
