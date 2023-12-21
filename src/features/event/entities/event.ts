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
  readonly _uuid: UuidObjectValue;
  readonly _name: NameObjectValue;
  readonly _date: DateObjectValue;
  readonly _campus: CampusObjectValue;
  readonly _sponsors: SponsorsObjectValue;
  readonly _rapporteurship: RapporteurshipObjectValue;
  readonly _photos: PhotosObjectValue;

  constructor(options: EventProperties) {
    super();
    this._uuid = new UuidObjectValue(options.uuid);
    this._name = new NameObjectValue(options.name);
    this._date = new DateObjectValue(options.date);
    this._campus = new CampusObjectValue(options.campus);
    this._sponsors = new SponsorsObjectValue(options.sponsors);
    this._rapporteurship = new RapporteurshipObjectValue(
      options.rapporteurship,
    );
    this._photos = new PhotosObjectValue(options.photos);
  }

  get uuid() {
    return this._uuid.value;
  }
  get name() {
    return this._name.value;
  }
  get date() {
    return this._date.value;
  }
  get campus() {
    return this._campus.value;
  }
  get sponsors() {
    return this._sponsors.value;
  }
  get rapporteurship() {
    return this._rapporteurship.value;
  }
  get photos() {
    return this._photos.value;
  }
}
