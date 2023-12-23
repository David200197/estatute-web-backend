import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateSocialNetworkDto } from '../../dto/update-social-network.dto';
import { SocialNetworkProps } from '../../models/social-network.model';

export class UpdateSocialNetworkCommand {
  constructor(
    public readonly filter: DeepPartial<SocialNetworkProps>,
    public readonly updateSocialNetworksDto: UpdateSocialNetworkDto,
  ) {}
}
