import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  SocialNetworkModel,
  SocialNetworkProperties,
} from '../models/social-network.model';
import { UuidValueObject } from '@src/common/value-object/uuid.value-object';
import { NameValueObject } from './value-object/name.value-object';
import { LinkValueObject } from './value-object/link.value-object';
import { IconValueObject } from './value-object/icon.value-object';

export class SocialNetwork extends Entity implements SocialNetworkModel {
  public readonly uuid: string;
  public readonly name: string;
  public readonly link: string;
  public readonly icon: string;

  constructor(options: SocialNetworkProperties) {
    super();
    this.uuid = new UuidValueObject(options.uuid).value;
    this.name = new NameValueObject(options.name).value;
    this.link = new LinkValueObject(options.link).value;
    this.icon = new IconValueObject(options.icon).value;
  }
}
