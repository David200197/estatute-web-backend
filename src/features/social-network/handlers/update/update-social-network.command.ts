import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateSocialNetworkDto } from '../../dto/update-social-network.dto';
import { SocialNetworkModel } from '../../models/social-network.model';

export class UpdateSocialNetworkCommand {
  constructor(
    public readonly filter: DeepPartial<SocialNetworkModel>,
    public readonly updateSocialNetworksDto: UpdateSocialNetworkDto,
  ) {}
}
