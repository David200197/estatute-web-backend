import { Entity } from '@src/common/abstracts/entity.abstract';
import { EventModel, EventProps } from '../models/event.model';
import { Uuid } from '@src/common/value-object/uuid.value-object';
import { Name } from './value-object/name.value-object';
import { DateValue } from './value-object/date.value-object';
import { Campus } from './value-object/campus.value-object';
import { Sponsors } from './value-object/sponsors.value-object';
import { Rapporteurship } from './value-object/rapporteurship.value-object';
import { Photos } from './value-object/photos.value-object';
import { PropsToValueObjects } from '@src/common/interfaces/props-to-value-objects';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class Event extends Entity<EventProps> implements EventModel {
  private constructor(options: PropsToValueObjects<EventProps>) {
    super(options);
  }

  public static create(
    options: SelfPartial<EventProps, 'uuid' | 'photos'>,
  ): Event {
    const uuid = Uuid.create(options.uuid);
    const name = Name.create(options.name);
    const date = DateValue.create(options.date);
    const campus = Campus.create(options.campus);
    const sponsors = Sponsors.create(options.sponsors);
    const rapporteurship = Rapporteurship.create(options.rapporteurship);
    const photos = Photos.create(options.photos);
    return new Event({
      uuid,
      name,
      date,
      campus,
      sponsors,
      rapporteurship,
      photos,
    });
  }
}
