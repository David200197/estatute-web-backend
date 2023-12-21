import { Injectable } from '@nestjs/common';
import { AnniversaryRepositoryModel } from '../models/anniversary-repository.model';
import { AnniversariesModel } from '../models/anniversaries.model';
import {
  AnniversaryModel,
  AnniversaryProperties,
} from '../models/anniversary.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAnniversaryDto } from '../dto/create-anniversary.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Anniversaries } from '../entities/anniversaries';
import { UpdateAnniversaryDto } from '../dto/update-anniversary.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { HelperMockMethods } from '@src/common/interfaces/helper-mock.methods';
import { Anniversary } from '../entities/anniversary';

@Injectable()
export class AnniversaryLocalRepository
  implements AnniversaryRepositoryModel, HelperMockMethods<AnniversaryModel>
{
  private anniversaryCrud: CrudMockMethods<AnniversaryModel>;

  constructor() {
    this.anniversaryCrud = new CrudMockMethods();
  }

  __changeStore(store: AnniversaryModel[]): void {
    this.anniversaryCrud.__changeStore(store);
  }

  __reset(): void {
    this.anniversaryCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.anniversaryCrud.__setIsError(value);
  }

  __getStore(): AnniversaryModel[] {
    return this.anniversaryCrud.__getStore();
  }

  __isError(): boolean {
    return this.anniversaryCrud.__isError();
  }

  __setFindAllRes(value: any) {
    this.anniversaryCrud.__setFindAllRes(value);
  }

  __setFindOneRes(value: any) {
    this.anniversaryCrud.__setFindOneRes(value);
  }

  __setCreateRes(value: any) {
    this.anniversaryCrud.__setCreateRes(value);
  }

  __setUpdateRes(value: any) {
    this.anniversaryCrud.__setUpdateRes(value);
  }

  __setUpdateManyRes(value: any) {
    this.anniversaryCrud.__setUpdateManyRes(value);
  }

  __setDeleteManyRes(value: any) {
    this.anniversaryCrud.__setDeleteManyRes(value);
  }

  __setDeleteRes(value: any) {
    this.anniversaryCrud.__setDeleteRes(value);
  }

  async findOne(
    filter: DeepPartial<AnniversaryProperties>,
  ): Promise<AnniversaryModel | null> {
    const anniversary = this.anniversaryCrud.findOne(filter);
    return Promise.resolve(anniversary);
  }

  async findAll(
    filter: DeepPartial<AnniversaryProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AnniversariesModel>> {
    //using options
    options;
    //code
    const anniversaries = this.anniversaryCrud.findAll(filter);
    return Promise.resolve({
      entities: Anniversaries.instance(anniversaries),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateAnniversaryDto): Promise<AnniversaryModel> {
    const anniversary = new Anniversary(options);
    return this.anniversaryCrud.create(anniversary);
  }

  async updateOne(
    filter: DeepPartial<AnniversaryProperties>,
    options: UpdateAnniversaryDto,
  ): Promise<AnniversaryModel> {
    return this.anniversaryCrud.update(filter, options);
  }

  async removeOne(
    filter: DeepPartial<AnniversaryProperties>,
  ): Promise<AnniversaryModel> {
    return this.anniversaryCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<AnniversaryProperties>,
    options: UpdateAnniversaryDto,
  ): Promise<boolean> {
    return this.anniversaryCrud.updateMany(filter, options);
  }

  async removeMany(
    filter: DeepPartial<AnniversaryProperties>,
  ): Promise<boolean> {
    return this.anniversaryCrud.deleteMany(filter);
  }
}
