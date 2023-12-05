import { UsersModel } from './users.model';
import { UserModel } from './user.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface UserRepositoryModel {
  findOne(filter: DeepPartial<UserModel>): Promise<UserModel | null>;
  findAll(
    filter: DeepPartial<UserModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<UsersModel>>;
  create(options: CreateUserDto): Promise<UserModel>;
  updateOne(
    filter: DeepPartial<UserModel>,
    options: UpdateUserDto,
  ): Promise<UserModel>;
  removeOne(filter: DeepPartial<UserModel>): Promise<UserModel>;
  updateMany(
    filter: DeepPartial<UserModel>,
    options: UpdateUserDto,
  ): Promise<UserModel>;
  removeMany(filter: DeepPartial<UserModel>): Promise<UserModel>;
}
