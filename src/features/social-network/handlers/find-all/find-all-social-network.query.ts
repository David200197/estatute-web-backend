import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { SocialNetworkProps } from '../../models/social-network.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllSocialNetworksQuery {
  constructor(
    public readonly filter: DeepPartial<SocialNetworkProps>,
    public readonly options: FindAllDto,
  ) {}
}
