import { EventModel } from '../models/event.model';
import { EventsModel } from '../models/events.model';

export class Events implements EventsModel {
  constructor(public readonly value: EventModel[]) {}
}
