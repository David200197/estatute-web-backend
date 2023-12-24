import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { SocialNetworkProps } from '../models/social-network.model';

@Entity({
  tableName: 'SocialNetwork',
})
export class SocialNetworkMikroEntity implements SocialNetworkProps {
  @PrimaryKey()
  uuid: string;
  @Property()
  name: string;
  @Property()
  icon: string;
  @Property()
  link: string;
}
