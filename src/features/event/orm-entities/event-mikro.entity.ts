import { ArrayType, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { EventProps } from '../models/event.model';

@Entity({
  tableName: 'Event',
})
export class EventMikroEntity implements EventProps {
  @PrimaryKey()
  uuid: string;
  @Property()
  name: string;
  @Property()
  date: string;
  @Property()
  campus: string;
  @Property()
  sponsors: string;
  @Property()
  rapporteurship: string;
  @Property({ type: ArrayType })
  photos: string[];
}
