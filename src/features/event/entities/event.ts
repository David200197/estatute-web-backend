import { Entity } from '@src/common/abstracts/entity.abstract';
import { EventModel, EventProperties } from '../models/event.model';
import { randomUUID } from 'crypto';

export class Event extends Entity implements EventModel {
  readonly uuid: string;
  readonly name: string;
  readonly date: string;
  readonly campus: string;
  readonly sponsors: string;
  readonly rapporteurship: string;
  readonly photos: string[];

  constructor(options: EventProperties) {
    super();
    this.uuid = options.uuid || randomUUID();
    this.name = options.name;
    this.date = options.date;
    this.campus = options.campus;
    this.sponsors = options.sponsors;
    this.rapporteurship = options.rapporteurship;
    this.photos = options.photos || [];
  }
}
