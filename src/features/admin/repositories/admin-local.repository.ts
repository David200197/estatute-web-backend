import { Injectable } from '@nestjs/common';
import { AdminRepositoryModel } from '../models/admin-repository.model';
import { AdminsModel } from '../models/admins.model';
import { AdminModel } from '../models/admin.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Admins } from '../entities/admins';
import { UpdateAdminDto } from '../dto/update-admin.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

@Injectable()
export class AdminLocalRepository implements AdminRepositoryModel {
  private adminCrud: CrudMockMethods<AdminModel>;

  constructor() {
    this.adminCrud = new CrudMockMethods();
  }

  async findOne(filter: DeepPartial<AdminModel>): Promise<AdminModel | null> {
    const admin = this.adminCrud.findOne(filter);
    return Promise.resolve(admin);
  }

  async findAll(
    filter: DeepPartial<AdminModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AdminsModel>> {
    //using options
    options;
    //code
    const admins = this.adminCrud.findAll(filter);
    return Promise.resolve({
      entities: new Admins(admins),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateAdminDto): Promise<AdminModel> {
    return this.adminCrud.create(options);
  }

  async updateOne(
    filter: DeepPartial<AdminModel>,
    options: UpdateAdminDto,
  ): Promise<AdminModel> {
    return this.adminCrud.update(filter, options);
  }

  async removeOne(filter: DeepPartial<AdminModel>): Promise<AdminModel> {
    return this.adminCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<AdminModel>,
    options: UpdateAdminDto,
  ): Promise<boolean> {
    return this.adminCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<AdminModel>): Promise<boolean> {
    return this.adminCrud.deleteMany(filter);
  }
}
