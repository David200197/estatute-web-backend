import { Injectable } from '@nestjs/common';
import { SocialNetworksRepositoryModel } from '../models/social-networks-repository.model';
import { SocialNetworkssModel } from '../models/social-networkss.model';
import { SocialNetworksModel } from '../models/social-networks.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateSocialNetworksDto } from '../dto/create-social-networks.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { SocialNetworkss } from '../entities/social-networkss';
import { UpdateSocialNetworksDto } from '../dto/update-social-networks.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { HelperMockMethods } from '@src/common/interfaces/helper-mock.methods';

@Injectable()
export class SocialNetworksLocalRepository
  implements
    SocialNetworksRepositoryModel,
    HelperMockMethods<SocialNetworksModel>
{
  private socialNetworksCrud: CrudMockMethods<SocialNetworksModel>;

  constructor() {
    this.socialNetworksCrud = new CrudMockMethods();
  }

  __changeStore(store: SocialNetworksModel[]): void {
    this.socialNetworksCrud.__changeStore(store);
  }

  __reset(): void {
    this.socialNetworksCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.socialNetworksCrud.__setIsError(value);
  }

  __getStore(): SocialNetworksModel[] {
    return this.__getStore();
  }

  __isError(): boolean {
    return this.__isError();
  }

  async findOne(
    filter: DeepPartial<SocialNetworksModel>,
  ): Promise<SocialNetworksModel | null> {
    const socialNetworks = this.socialNetworksCrud.findOne(filter);
    return Promise.resolve(socialNetworks);
  }

  async findAll(
    filter: DeepPartial<SocialNetworksModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<SocialNetworkssModel>> {
    //using options
    options;
    //code
    const socialNetworkss = this.socialNetworksCrud.findAll(filter);
    return Promise.resolve({
      entities: new SocialNetworkss(socialNetworkss),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateSocialNetworksDto): Promise<SocialNetworksModel> {
    return this.socialNetworksCrud.create(options);
  }

  async updateOne(
    filter: DeepPartial<SocialNetworksModel>,
    options: UpdateSocialNetworksDto,
  ): Promise<SocialNetworksModel> {
    return this.socialNetworksCrud.update(filter, options);
  }

  async removeOne(
    filter: DeepPartial<SocialNetworksModel>,
  ): Promise<SocialNetworksModel> {
    return this.socialNetworksCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<SocialNetworksModel>,
    options: UpdateSocialNetworksDto,
  ): Promise<boolean> {
    return this.socialNetworksCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<SocialNetworksModel>): Promise<boolean> {
    return this.socialNetworksCrud.deleteMany(filter);
  }
}
