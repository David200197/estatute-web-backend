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
  private readonly _uuid: UuidObjectValue;
  private _name: NameObjectValue;
  private _date: DateObjectValue;
  private _campus: CampusObjectValue;
  private _sponsors: SponsorsObjectValue;
  private _rapporteurship: RapporteurshipObjectValue;
  private _photos: PhotosObjectValue;

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

  set name(value: string) {
    this._name = new NameObjectValue(value);
  }

  get date() {
    return this._date.value;
  }

  set date(value: string) {
    this._date = new DateObjectValue(value);
  }

  get campus() {
    return this._campus.value;
  }

  set campus(value: string) {
    this._campus = new CampusObjectValue(value);
  }

  get sponsors() {
    return this._sponsors.value;
  }

  set sponsors(value: string) {
    this._sponsors = new SponsorsObjectValue(value);
  }

  get rapporteurship() {
    return this._rapporteurship.value;
  }

  set rapporteurship(value: string) {
    this._rapporteurship = new RapporteurshipObjectValue(value);
  }

  get photos() {
    return this._photos.value;
  }

  set photos(value: string[]) {
    this._photos = new PhotosObjectValue(value);
  }
}
