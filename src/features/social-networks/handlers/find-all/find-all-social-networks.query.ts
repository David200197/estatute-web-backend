import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { SocialNetworksModel } from '../../models/social-networks.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllSocialNetworksQuery {
  constructor(
    public readonly filter: DeepPartial<SocialNetworksModel>,
    public readonly options: FindAllDto,
  ) {}
}
