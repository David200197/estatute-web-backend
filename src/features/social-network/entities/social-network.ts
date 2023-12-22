import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  SocialNetworkModel,
  SocialNetworkProperties,
} from '../models/social-network.model';
import { UuidObjectValue } from '@src/common/object-value/uuid.object-value';
import { NameObjectValue } from './object-value/name.object-value';
import { LinkObjectValue } from './object-value/link.object-value';
import { IconObjectValue } from './object-value/icon.object-value';

export class SocialNetwork extends Entity implements SocialNetworkModel {
  public readonly uuid: string;
  public readonly name: string;
  public readonly link: string;
  public readonly icon: string;

  constructor(options: SocialNetworkProperties) {
    super();
    this.uuid = new UuidObjectValue(options.uuid).value;
    this.name = new NameObjectValue(options.name).value;
    this.link = new LinkObjectValue(options.link).value;
    this.icon = new IconObjectValue(options.icon).value;
  }
}
