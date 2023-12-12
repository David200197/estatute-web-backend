import { Injectable } from '@nestjs/common';
import { StatuteRepositoryModel } from '../models/statute-repository.model';
import { StatutesModel } from '../models/statutes.model';
import { StatuteModel, StatuteProperties } from '../models/statute.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateStatuteDto } from '../dto/create-statute.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Statutes } from '../entities/statutes';
import { UpdateStatuteDto } from '../dto/update-statute.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { HelperMockMethods } from '@src/common/interfaces/helper-mock.methods';
import { Statute } from '../entities/statute';

@Injectable()
export class StatuteLocalRepository
  implements StatuteRepositoryModel, HelperMockMethods<StatuteModel>
{
  private statuteCrud: CrudMockMethods<StatuteModel>;

  constructor() {
    this.statuteCrud = new CrudMockMethods();
  }

  __changeStore(store: StatuteModel[]): void {
    this.statuteCrud.__changeStore(store);
  }

  __reset(): void {
    this.statuteCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.statuteCrud.__setIsError(value);
  }

  __getStore(): StatuteModel[] {
    return this.__getStore();
  }

  __isError(): boolean {
    return this.__isError();
  }

  async findOne(
    filter: DeepPartial<StatuteProperties>,
  ): Promise<StatuteModel | null> {
    const statute = this.statuteCrud.findOne(filter);
    return Promise.resolve(statute);
  }

  async findAll(
    filter: DeepPartial<StatuteProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<StatutesModel>> {
    //using options
    options;
    //code
    const statutes = this.statuteCrud.findAll(filter);
    return Promise.resolve({
      entities: new Statutes(statutes),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateStatuteDto): Promise<StatuteModel> {
    const statute = new Statute(options);
    return this.statuteCrud.create(statute);
  }

  async updateOne(
    filter: DeepPartial<StatuteProperties>,
    options: UpdateStatuteDto,
  ): Promise<StatuteModel> {
    return this.statuteCrud.update(filter, options);
  }

  async removeOne(
    filter: DeepPartial<StatuteProperties>,
  ): Promise<StatuteModel> {
    return this.statuteCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<StatuteProperties>,
    options: UpdateStatuteDto,
  ): Promise<boolean> {
    return this.statuteCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<StatuteProperties>): Promise<boolean> {
    return this.statuteCrud.deleteMany(filter);
  }
}
