import { Entity } from '@src/common/abstracts/entity.abstract';
import { EventModel, EventProperties } from '../models/event.model';

export class Event extends Entity implements EventModel {
  readonly uuid: string;
  constructor(options: EventProperties) {
    super();
    Object.assign(this, options);
  }
}
