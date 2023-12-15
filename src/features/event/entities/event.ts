import { Entity } from '@src/common/abstracts/entity.abstract';
import { EventModel, EventProperties } from '../models/event.model';

export class Event extends Entity implements EventModel {
  readonly uuid: string;
  readonly name: string;
  readonly date: string;
  readonly campus: string;
  readonly sponsors: string;
  readonly rapporteurship: string;
  constructor(options: EventProperties) {
    super();
    Object.assign(this, options);
  }
}
