import { Entity } from '@src/common/abstracts/entity.abstract';
import { EventModel, EventProperties } from '../models/event.model';
import { UuidValueObject } from '@src/common/value-object/uuid.value-object';
import { NameValueObject } from './value-object/name.value-object';
import { DateValueObject } from './value-object/date.value-object';
import { CampusValueObject } from './value-object/campus.value-object';
import { SponsorsValueObject } from './value-object/sponsors.value-object';
import { RapporteurshipValueObject } from './value-object/rapporteurship.value-object';
import { PhotosValueObject } from './value-object/photos.value-object';

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
    this.uuid = new UuidValueObject(options.uuid).value;
    this.name = new NameValueObject(options.name).value;
    this.date = new DateValueObject(options.date).value;
    this.campus = new CampusValueObject(options.campus).value;
    this.sponsors = new SponsorsValueObject(options.sponsors).value;
    this.rapporteurship = new RapporteurshipValueObject(
      options.rapporteurship,
    ).value;
    this.photos = new PhotosValueObject(options.photos).value;
  }
}
