import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { SocialNetworkModel } from '../../models/social-network.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllSocialNetworksQuery {
  constructor(
    public readonly filter: DeepPartial<SocialNetworkModel>,
    public readonly options: FindAllDto,
  ) {}
}
