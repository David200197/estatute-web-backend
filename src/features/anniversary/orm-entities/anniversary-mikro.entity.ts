import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { AnniversaryProps } from '../models/anniversary.model';

@Entity({
  tableName: 'Anniversary',
})
export class AnniversaryMikroEntity implements AnniversaryProps {
  @PrimaryKey()
  uuid: string;
  @Property()
  date: Date;
  @Property()
  description: string;
}
