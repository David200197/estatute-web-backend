import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import {
  SocialNetworkProps,
  TypeSocialNetworkEnum,
} from '../models/social-network.model';

@Entity({
  tableName: 'SocialNetwork',
})
export class SocialNetworkMikroEntity implements SocialNetworkProps {
  @PrimaryKey()
  uuid: string;
  @Property()
  link: string;
  @Property({ type: 'string' })
  type: TypeSocialNetworkEnum;
}
