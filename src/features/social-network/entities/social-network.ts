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
  readonly _uuid: UuidObjectValue;
  _name: NameObjectValue;
  _link: LinkObjectValue;
  _icon: IconObjectValue;

  constructor(options: SocialNetworkProperties) {
    super();
    this._uuid = new UuidObjectValue(options.uuid);
    this._name = new NameObjectValue(options.name);
    this._link = new LinkObjectValue(options.link);
    this._icon = new IconObjectValue(options.icon);
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

  get link() {
    return this._link.value;
  }

  set link(value: string) {
    this._link = new LinkObjectValue(value);
  }

  get icon() {
    return this._icon.value;
  }

  set icon(value: string) {
    this._icon = new IconObjectValue(value);
  }
}
