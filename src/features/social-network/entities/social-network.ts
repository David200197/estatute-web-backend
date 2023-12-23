import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  SocialNetworkModel,
  SocialNetworkProps,
} from '../models/social-network.model';
import { Uuid } from '@src/common/value-object/uuid.value-object';
import { Name } from './value-object/name.value-object';
import { Link } from './value-object/link.value-object';
import { Icon } from './value-object/icon.value-object';
import { PropsToValueObjects } from '@src/common/interfaces/props-to-value-objects';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class SocialNetwork
  extends Entity<SocialNetworkProps>
  implements SocialNetworkModel
{
  private constructor(options: PropsToValueObjects<SocialNetworkProps>) {
    super(options);
  }

  public static create(
    options: SelfPartial<SocialNetworkProps, 'uuid'>,
  ): SocialNetwork {
    const uuid = Uuid.create(options.uuid);
    const name = Name.create(options.name);
    const link = Link.create(options.link);
    const icon = Icon.create(options.icon);
    return new SocialNetwork({ uuid, name, link, icon });
  }
}
