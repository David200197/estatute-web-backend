import { Injectable } from '@nestjs/common';
import { StatuteRepositoryModel } from '../models/statute-repository.model';
import { StatutesModel } from '../models/statutes.model';
import { StatuteModel, StatuteProps } from '../models/statute.model';
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
  private statuteCrud: CrudMockMethods<StatuteProps>;

  constructor() {
    this.statuteCrud = new CrudMockMethods();
  }

  __changeStore(store: StatuteModel[]): void {
    this.statuteCrud.__changeStore(store.map((data) => data.toObject()));
  }

  __reset(): void {
    this.statuteCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.statuteCrud.__setIsError(value);
  }

  __getStore(): StatuteModel[] {
    return this.statuteCrud.__getStore().map((data) => Statute.create(data));
  }

  __isError(): boolean {
    return this.statuteCrud.__isError();
  }

  __setFindAllRes(value: any) {
    this.statuteCrud.__setFindAllRes(value);
  }

  __setFindOneRes(value: any) {
    this.statuteCrud.__setFindOneRes(value);
  }

  __setCreateRes(value: any) {
    this.statuteCrud.__setCreateRes(value);
  }

  __setUpdateRes(value: any) {
    this.statuteCrud.__setUpdateRes(value);
  }

  __setUpdateManyRes(value: any) {
    this.statuteCrud.__setUpdateManyRes(value);
  }

  __setDeleteManyRes(value: any) {
    this.statuteCrud.__setDeleteManyRes(value);
  }

  __setDeleteRes(value: any) {
    this.statuteCrud.__setDeleteRes(value);
  }

  async findOne(
    filter: DeepPartial<StatuteProps>,
  ): Promise<StatuteModel | null> {
    const statute = this.statuteCrud.findOne(filter);
    return Promise.resolve(Statute.create(statute));
  }

  async findAll(
    filter: DeepPartial<StatuteProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<StatutesModel>> {
    //using options
    options;
    //code
    const statutes = this.statuteCrud.findAll(filter);
    return Promise.resolve({
      entities: Statutes.create(statutes),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateStatuteDto): Promise<StatuteModel> {
    const statute = Statute.create(options);
    this.statuteCrud.create(statute.toObject());
    return statute;
  }

  async updateOne(
    filter: DeepPartial<StatuteProps>,
    options: UpdateStatuteDto,
  ): Promise<StatuteModel> {
    const statute = this.statuteCrud.update(filter, options);
    return Statute.create(statute);
  }

  async removeOne(filter: DeepPartial<StatuteProps>): Promise<StatuteModel> {
    const statute = this.statuteCrud.delete(filter);
    return Statute.create(statute);
  }

  async updateMany(
    filter: DeepPartial<StatuteProps>,
    options: UpdateStatuteDto,
  ): Promise<boolean> {
    return this.statuteCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<StatuteProps>): Promise<boolean> {
    return this.statuteCrud.deleteMany(filter);
  }
}
