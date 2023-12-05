import { SocialNetworksModel } from '../models/social-networks.model';
import { SocialNetworkssModel } from '../models/social-networkss.model';

export class SocialNetworkss implements SocialNetworkssModel {
  constructor(public readonly value: SocialNetworksModel[]) {}
}
