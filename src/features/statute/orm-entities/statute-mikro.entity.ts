import { Entity, PrimaryKey } from '@mikro-orm/core';
import { StatuteProps } from '../models/statute.model';

@Entity({
  tableName: 'Statute',
})
export class StatuteMikroEntity implements StatuteProps {
  @PrimaryKey()
  uuid: string;
}
