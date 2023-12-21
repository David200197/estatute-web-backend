import { Injectable } from '@nestjs/common';
import { AdminRepositoryModel } from '../models/admin-repository.model';
import { AdminsModel } from '../models/admins.model';
import { AdminModel, AdminProperties } from '../models/admin.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Admins } from '../entities/admins';
import { UpdateAdminDto } from '../dto/update-admin.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { Admin } from '../entities/admin';

@Injectable()
export class AdminLocalRepository implements AdminRepositoryModel {
  private adminCrud: CrudMockMethods<AdminModel>;

  constructor() {
    this.adminCrud = new CrudMockMethods();
  }

  __changeStore(store: AdminModel[]): void {
    this.adminCrud.__changeStore(store);
  }

  __reset(): void {
    this.adminCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.adminCrud.__setIsError(value);
  }

  __getStore(): AdminModel[] {
    return this.adminCrud.__getStore();
  }

  __isError(): boolean {
    return this.adminCrud.__isError();
  }

  __setFindAllRes(value: any) {
    this.adminCrud.__setFindAllRes(value);
  }

  __setFindOneRes(value: any) {
    this.adminCrud.__setFindOneRes(value);
  }

  __setCreateRes(value: any) {
    this.adminCrud.__setCreateRes(value);
  }

  __setUpdateRes(value: any) {
    this.adminCrud.__setUpdateRes(value);
  }

  __setUpdateManyRes(value: any) {
    this.adminCrud.__setUpdateManyRes(value);
  }

  __setDeleteManyRes(value: any) {
    this.adminCrud.__setDeleteManyRes(value);
  }

  __setDeleteRes(value: any) {
    this.adminCrud.__setDeleteRes(value);
  }

  async findOne(
    filter: DeepPartial<AdminProperties>,
  ): Promise<AdminModel | null> {
    const admin = this.adminCrud.findOne(filter);
    return Promise.resolve(admin);
  }

  async findAll(
    filter: DeepPartial<AdminProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AdminsModel>> {
    //using options
    options;
    //code
    const admins = this.adminCrud.findAll(filter);
    return Promise.resolve({
      entities: Admins.instance(admins),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateAdminDto): Promise<AdminModel> {
    const admin = new Admin(options);
    return this.adminCrud.create(admin);
  }

  async updateOne(
    filter: DeepPartial<AdminProperties>,
    options: UpdateAdminDto,
  ): Promise<AdminModel> {
    return this.adminCrud.update(filter, options);
  }

  async removeOne(filter: DeepPartial<AdminProperties>): Promise<AdminModel> {
    return this.adminCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<AdminProperties>,
    options: UpdateAdminDto,
  ): Promise<boolean> {
    return this.adminCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<AdminProperties>): Promise<boolean> {
    return this.adminCrud.deleteMany(filter);
  }
}
