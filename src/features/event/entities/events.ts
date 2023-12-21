import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { EventModel } from '../models/event.model';
import { EventsModel } from '../models/events.model';
import { Event } from './event';

export class Events
  extends EntityCollection<EventModel>
  implements EventsModel
{
  private constructor(public readonly value: EventModel[]) {
    super(value);
  }

  static instance(value: EventModel[]) {
    if (!Array.isArray(value)) throw new TypeError('Events is not a array');
    return new Events(value.map((data) => new Event(data)));
  }
}
