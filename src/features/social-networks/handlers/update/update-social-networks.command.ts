import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateSocialNetworksDto } from '../../dto/update-social-networks.dto';
import { SocialNetworksModel } from '../../models/social-networks.model';

export class UpdateSocialNetworksCommand {
  constructor(
    public readonly filter: DeepPartial<SocialNetworksModel>,
    public readonly updateSocialNetworksDto: UpdateSocialNetworksDto,
  ) {}
}
