import { Entity } from '@src/common/abstracts/entity.abstract';
import { EventModel, EventProperties } from '../models/event.model';
import { UuidObjectValue } from '@src/common/object-value/uuid.object-value';
import { NameObjectValue } from './object-value/name.object-value';
import { DateObjectValue } from './object-value/date.object-value';
import { CampusObjectValue } from './object-value/campus.object-value';
import { SponsorsObjectValue } from './object-value/sponsors.object-value';
import { RapporteurshipObjectValue } from './object-value/rapporteurship.object-value';
import { PhotosObjectValue } from './object-value/photos.object-value';

export class Event extends Entity implements EventModel {
  public readonly uuid: string;
  public readonly name: string;
  public readonly date: string;
  public readonly campus: string;
  public readonly sponsors: string;
  public readonly rapporteurship: string;
  public readonly photos: string[];

  constructor(options: EventProperties) {
    super();
    this.uuid = new UuidObjectValue(options.uuid).value;
    this.name = new NameObjectValue(options.name).value;
    this.date = new DateObjectValue(options.date).value;
    this.campus = new CampusObjectValue(options.campus).value;
    this.sponsors = new SponsorsObjectValue(options.sponsors).value;
    this.rapporteurship = new RapporteurshipObjectValue(
      options.rapporteurship,
    ).value;
    this.photos = new PhotosObjectValue(options.photos).value;
  }
}
