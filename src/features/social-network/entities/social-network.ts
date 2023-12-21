import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  SocialNetworkModel,
  SocialNetworkProperties,
} from '../models/social-network.model';

export class SocialNetwork extends Entity implements SocialNetworkModel {
  readonly uuid: string;
  readonly name: string;
  readonly link: string;
  readonly icon: string;
  constructor(options: SocialNetworkProperties) {
    super();
    Object.assign(this, options);
  }
}
