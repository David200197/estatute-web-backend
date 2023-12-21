import { Injectable } from '@nestjs/common';
import { SocialNetworkRepositoryModel } from '../models/social-network-repository.model';
import { SocialNetworksModel } from '../models/social-networks.model';
import {
  SocialNetworkModel,
  SocialNetworkProperties,
} from '../models/social-network.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateSocialNetworkDto } from '../dto/create-social-network.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { SocialNetworks } from '../entities/social-networks';
import { UpdateSocialNetworkDto } from '../dto/update-social-network.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { HelperMockMethods } from '@src/common/interfaces/helper-mock.methods';
import { SocialNetwork } from '../entities/social-network';

@Injectable()
export class SocialNetworkLocalRepository
  implements
    SocialNetworkRepositoryModel,
    HelperMockMethods<SocialNetworkModel>
{
  private socialNetworkCrud: CrudMockMethods<SocialNetworkModel>;

  constructor() {
    this.socialNetworkCrud = new CrudMockMethods();
  }

  __changeStore(store: SocialNetworkModel[]): void {
    this.socialNetworkCrud.__changeStore(store);
  }

  __reset(): void {
    this.socialNetworkCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.socialNetworkCrud.__setIsError(value);
  }

  __getStore(): SocialNetworkModel[] {
    return this.socialNetworkCrud.__getStore();
  }

  __isError(): boolean {
    return this.socialNetworkCrud.__isError();
  }

  __setFindAllRes(value: any) {
    this.socialNetworkCrud.__setFindAllRes(value);
  }

  __setFindOneRes(value: any) {
    this.socialNetworkCrud.__setFindOneRes(value);
  }

  __setCreateRes(value: any) {
    this.socialNetworkCrud.__setCreateRes(value);
  }

  __setUpdateRes(value: any) {
    this.socialNetworkCrud.__setUpdateRes(value);
  }

  __setUpdateManyRes(value: any) {
    this.socialNetworkCrud.__setUpdateManyRes(value);
  }

  __setDeleteManyRes(value: any) {
    this.socialNetworkCrud.__setDeleteManyRes(value);
  }

  __setDeleteRes(value: any) {
    this.socialNetworkCrud.__setDeleteRes(value);
  }

  async findOne(
    filter: DeepPartial<SocialNetworkProperties>,
  ): Promise<SocialNetworkModel | null> {
    const socialNetwork = this.socialNetworkCrud.findOne(filter);
    return Promise.resolve(socialNetwork);
  }

  async findAll(
    filter: DeepPartial<SocialNetworkProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<SocialNetworksModel>> {
    //using options
    options;
    //code
    const socialNetworks = this.socialNetworkCrud.findAll(filter);
    return Promise.resolve({
      entities: SocialNetworks.instance(socialNetworks),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateSocialNetworkDto): Promise<SocialNetworkModel> {
    const socialNetwork = new SocialNetwork(options);
    return this.socialNetworkCrud.create(socialNetwork);
  }

  async updateOne(
    filter: DeepPartial<SocialNetworkProperties>,
    options: UpdateSocialNetworkDto,
  ): Promise<SocialNetworkModel> {
    return this.socialNetworkCrud.update(filter, options);
  }

  async removeOne(
    filter: DeepPartial<SocialNetworkProperties>,
  ): Promise<SocialNetworkModel> {
    return this.socialNetworkCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<SocialNetworkProperties>,
    options: UpdateSocialNetworkDto,
  ): Promise<boolean> {
    return this.socialNetworkCrud.updateMany(filter, options);
  }

  async removeMany(
    filter: DeepPartial<SocialNetworkProperties>,
  ): Promise<boolean> {
    return this.socialNetworkCrud.deleteMany(filter);
  }
}
