import { Injectable } from '@nestjs/common';
import { AnniversaryRepositoryModel } from '../models/anniversary-repository.model';
import { AnniversariesModel } from '../models/anniversaries.model';
import {
  AnniversaryModel,
  AnniversaryProps,
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
  private anniversaryCrud: CrudMockMethods<AnniversaryProps>;

  constructor() {
    this.anniversaryCrud = new CrudMockMethods();
  }

  __changeStore(store: AnniversaryModel[]): void {
    this.anniversaryCrud.__changeStore(store.map((data) => data.toObject()));
  }

  __reset(): void {
    this.anniversaryCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.anniversaryCrud.__setIsError(value);
  }

  __getStore(): AnniversaryModel[] {
    return this.anniversaryCrud
      .__getStore()
      .map((data) => Anniversary.create(data));
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
    filter: DeepPartial<AnniversaryProps>,
  ): Promise<AnniversaryModel | null> {
    const anniversary = this.anniversaryCrud.findOne(filter);
    return Promise.resolve(Anniversary.create(anniversary));
  }

  async findAll(
    filter: DeepPartial<AnniversaryProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AnniversariesModel>> {
    //using options
    options;
    //code
    const anniversaries = this.anniversaryCrud.findAll(filter);
    return Promise.resolve({
      entities: Anniversaries.create(anniversaries),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateAnniversaryDto): Promise<AnniversaryModel> {
    const anniversary = Anniversary.create(options);
    this.anniversaryCrud.create(anniversary.toObject());
    return anniversary;
  }

  async updateOne(
    filter: DeepPartial<AnniversaryProps>,
    options: UpdateAnniversaryDto,
  ): Promise<AnniversaryModel> {
    const anniversary = this.anniversaryCrud.update(filter, options);
    return Anniversary.create(anniversary);
  }

  async removeOne(
    filter: DeepPartial<AnniversaryProps>,
  ): Promise<AnniversaryModel> {
    const anniversary = this.anniversaryCrud.delete(filter);
    return Anniversary.create(anniversary);
  }

  async updateMany(
    filter: DeepPartial<AnniversaryProps>,
    options: UpdateAnniversaryDto,
  ): Promise<boolean> {
    return this.anniversaryCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<AnniversaryProps>): Promise<boolean> {
    return this.anniversaryCrud.deleteMany(filter);
  }
}
