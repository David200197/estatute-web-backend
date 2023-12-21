import { SocialNetworksModel } from './social-networks.model';
import {
  SocialNetworkModel,
  SocialNetworkProperties,
} from './social-network.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateSocialNetworkDto } from '../dto/create-social-network.dto';
import { UpdateSocialNetworkDto } from '../dto/update-social-network.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface SocialNetworkRepositoryModel {
  findOne(
    filter: DeepPartial<SocialNetworkProperties>,
  ): Promise<SocialNetworkModel | null>;
  findAll(
    filter: DeepPartial<SocialNetworkProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<SocialNetworksModel>>;
  create(options: CreateSocialNetworkDto): Promise<SocialNetworkModel>;
  updateOne(
    filter: DeepPartial<SocialNetworkProperties>,
    options: UpdateSocialNetworkDto,
  ): Promise<SocialNetworkModel>;
  removeOne(
    filter: DeepPartial<SocialNetworkProperties>,
  ): Promise<SocialNetworkModel>;
  updateMany(
    filter: DeepPartial<SocialNetworkProperties>,
    options: UpdateSocialNetworkDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<SocialNetworkProperties>): Promise<boolean>;
}
