import { Entity } from '@src/common/abstracts/entity.abstract';
import { EventModel, EventProperties } from '../models/event.model';

export class Event extends Entity<EventModel> implements EventModel {
  constructor(options: EventProperties) {
    super(options);
    Object.assign(this, options);
  }
}
