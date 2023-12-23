import { Injectable } from '@nestjs/common';
import { SocialNetworkRepositoryModel } from '../models/social-network-repository.model';
import { SocialNetworksModel } from '../models/social-networks.model';
import {
  SocialNetworkModel,
  SocialNetworkProps,
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
  private socialNetworkCrud: CrudMockMethods<SocialNetworkProps>;

  constructor() {
    this.socialNetworkCrud = new CrudMockMethods();
  }

  __changeStore(store: SocialNetworkModel[]): void {
    this.socialNetworkCrud.__changeStore(store.map((data) => data.toObject()));
  }

  __reset(): void {
    this.socialNetworkCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.socialNetworkCrud.__setIsError(value);
  }

  __getStore(): SocialNetworkModel[] {
    return this.socialNetworkCrud
      .__getStore()
      .map((data) => SocialNetwork.create(data));
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
    filter: DeepPartial<SocialNetworkProps>,
  ): Promise<SocialNetworkModel | null> {
    const socialNetwork = this.socialNetworkCrud.findOne(filter);
    return Promise.resolve(SocialNetwork.create(socialNetwork));
  }

  async findAll(
    filter: DeepPartial<SocialNetworkProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<SocialNetworksModel>> {
    //using options
    options;
    //code
    const socialNetworks = this.socialNetworkCrud.findAll(filter);
    return Promise.resolve({
      entities: SocialNetworks.create(socialNetworks),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateSocialNetworkDto): Promise<SocialNetworkModel> {
    const socialNetwork = SocialNetwork.create(options);
    this.socialNetworkCrud.create(socialNetwork.toObject());
    return socialNetwork;
  }

  async updateOne(
    filter: DeepPartial<SocialNetworkProps>,
    options: UpdateSocialNetworkDto,
  ): Promise<SocialNetworkModel> {
    const socialNetwork = this.socialNetworkCrud.update(filter, options);
    return SocialNetwork.create(socialNetwork);
  }

  async removeOne(
    filter: DeepPartial<SocialNetworkProps>,
  ): Promise<SocialNetworkModel> {
    const socialNetwork = this.socialNetworkCrud.delete(filter);
    return SocialNetwork.create(socialNetwork);
  }

  async updateMany(
    filter: DeepPartial<SocialNetworkProps>,
    options: UpdateSocialNetworkDto,
  ): Promise<boolean> {
    return this.socialNetworkCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<SocialNetworkProps>): Promise<boolean> {
    return this.socialNetworkCrud.deleteMany(filter);
  }
}
