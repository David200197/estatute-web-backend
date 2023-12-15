import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  SocialNetworksModel,
  SocialNetworksProperties,
} from '../models/social-networks.model';

export class SocialNetworks extends Entity implements SocialNetworksModel {
  readonly uuid: string;
  readonly name: string;
  readonly link: string;
  readonly icon: string;
  constructor(options: SocialNetworksProperties) {
    super();
    Object.assign(this, options);
  }
}
