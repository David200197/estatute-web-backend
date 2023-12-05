import { Injectable } from '@nestjs/common';
import { UserRepositoryModel } from '../models/user-repository.model';
import { UsersModel } from '../models/users.model';
import { UserModel } from '../models/user.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Users } from '../entities/users';
import { UpdateUserDto } from '../dto/update-user.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

@Injectable()
export class UserLocalRepository implements UserRepositoryModel {
  private userCrud: CrudMockMethods<UserModel>;

  constructor() {
    this.userCrud = new CrudMockMethods();
  }

  async findOne(filter: DeepPartial<UserModel>): Promise<UserModel | null> {
    const user = this.userCrud.findOne(filter);
    return Promise.resolve(user);
  }

  async findAll(
    filter: DeepPartial<UserModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<UsersModel>> {
    //using options
    options;
    //code
    const users = this.userCrud.findAll(filter);
    return Promise.resolve({
      entities: new Users(users),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateUserDto): Promise<UserModel> {
    return this.userCrud.create(options);
  }

  async updateOne(
    filter: DeepPartial<UserModel>,
    options: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userCrud.update(filter, options);
  }

  async removeOne(filter: DeepPartial<UserModel>): Promise<UserModel> {
    return this.userCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<UserModel>,
    options: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<UserModel>): Promise<UserModel> {
    return this.userCrud.deleteMany(filter);
  }
}
