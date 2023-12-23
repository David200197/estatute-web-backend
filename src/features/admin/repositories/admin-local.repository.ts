import { Injectable } from '@nestjs/common';
import { AdminRepositoryModel } from '../models/admin-repository.model';
import { AdminsModel } from '../models/admins.model';
import { AdminModel, AdminProps } from '../models/admin.model';
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
  private adminCrud: CrudMockMethods<AdminProps>;

  constructor() {
    this.adminCrud = new CrudMockMethods();
  }

  __changeStore(store: AdminModel[]): void {
    this.adminCrud.__changeStore(store.map((data) => data.toObject()));
  }

  __reset(): void {
    this.adminCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.adminCrud.__setIsError(value);
  }

  __getStore(): AdminModel[] {
    return this.adminCrud.__getStore().map((data) => Admin.create(data));
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

  async findOne(filter: DeepPartial<AdminProps>): Promise<AdminModel | null> {
    const admin = this.adminCrud.findOne(filter);
    if (!admin) return null;
    return Promise.resolve(Admin.create(admin));
  }

  async findAll(
    filter: DeepPartial<AdminProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AdminsModel>> {
    //using options
    options;
    //code
    const admins = this.adminCrud.findAll(filter);
    return Promise.resolve({
      entities: Admins.create(admins),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateAdminDto): Promise<AdminModel> {
    const admin = Admin.create(options);
    this.adminCrud.create(admin.toObject());
    return admin;
  }

  async updateOne(
    filter: DeepPartial<AdminProps>,
    options: UpdateAdminDto,
  ): Promise<AdminModel> {
    const admin = this.adminCrud.update(filter, options);
    if (!admin) return null;
    return Admin.create(admin);
  }

  async removeOne(filter: DeepPartial<AdminProps>): Promise<AdminModel> {
    const admin = this.adminCrud.delete(filter);
    if (!admin) return null;
    return Admin.create(admin);
  }

  async updateMany(
    filter: DeepPartial<AdminProps>,
    options: UpdateAdminDto,
  ): Promise<boolean> {
    return this.adminCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<AdminProps>): Promise<boolean> {
    return this.adminCrud.deleteMany(filter);
  }
}
