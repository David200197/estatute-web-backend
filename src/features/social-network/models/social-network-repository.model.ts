import { SocialNetworksModel } from './social-networks.model';
import { SocialNetworkModel, SocialNetworkProps } from './social-network.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateSocialNetworkDto } from '../dto/create-social-network.dto';
import { UpdateSocialNetworkDto } from '../dto/update-social-network.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface SocialNetworkRepositoryModel {
  findOne(
    filter: DeepPartial<SocialNetworkProps>,
  ): Promise<SocialNetworkModel | null>;
  findAll(
    filter: DeepPartial<SocialNetworkProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<SocialNetworksModel>>;
  create(options: CreateSocialNetworkDto): Promise<SocialNetworkModel>;
  updateOne(
    filter: DeepPartial<SocialNetworkProps>,
    options: UpdateSocialNetworkDto,
  ): Promise<SocialNetworkModel>;
  removeOne(
    filter: DeepPartial<SocialNetworkProps>,
  ): Promise<SocialNetworkModel>;
  updateMany(
    filter: DeepPartial<SocialNetworkProps>,
    options: UpdateSocialNetworkDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<SocialNetworkProps>): Promise<boolean>;
}
