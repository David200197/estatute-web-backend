import { Entities } from '@src/common/abstracts/entities.abstracts';
import { EventModel, EventProps } from '../models/event.model';
import { EventsModel } from '../models/events.model';
import { Event } from './event';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class Events extends Entities<EventModel> implements EventsModel {
  private constructor(public readonly value: EventModel[]) {
    super(value);
  }

  static create(value: SelfPartial<EventProps, 'uuid'>[]) {
    if (!Array.isArray(value)) throw new TypeError('Events is not a array');
    return new Events(value.map((data) => Event.create(data)));
  }
}
