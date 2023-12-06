import { SocialNetworkssModel } from './social-networkss.model';
import { SocialNetworksModel } from './social-networks.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateSocialNetworksDto } from '../dto/create-social-networks.dto';
import { UpdateSocialNetworksDto } from '../dto/update-social-networks.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface SocialNetworksRepositoryModel {
  findOne(
    filter: DeepPartial<SocialNetworksModel>,
  ): Promise<SocialNetworksModel | null>;
  findAll(
    filter: DeepPartial<SocialNetworksModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<SocialNetworkssModel>>;
  create(options: CreateSocialNetworksDto): Promise<SocialNetworksModel>;
  updateOne(
    filter: DeepPartial<SocialNetworksModel>,
    options: UpdateSocialNetworksDto,
  ): Promise<SocialNetworksModel>;
  removeOne(
    filter: DeepPartial<SocialNetworksModel>,
  ): Promise<SocialNetworksModel>;
  updateMany(
    filter: DeepPartial<SocialNetworksModel>,
    options: UpdateSocialNetworksDto,
  ): Promise<SocialNetworksModel>;
  removeMany(
    filter: DeepPartial<SocialNetworksModel>,
  ): Promise<SocialNetworksModel>;
}