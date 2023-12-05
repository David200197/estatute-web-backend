import { AuthsModel } from './auths.model';
import { AuthModel } from './auth.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface AuthRepositoryModel {
  findOne(filter: DeepPartial<AuthModel>): Promise<AuthModel | null>;
  findAll(
    filter: DeepPartial<AuthModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AuthsModel>>;
  create(options: CreateAuthDto): Promise<AuthModel>;
  updateOne(
    filter: DeepPartial<AuthModel>,
    options: UpdateAuthDto,
  ): Promise<AuthModel>;
  removeOne(filter: DeepPartial<AuthModel>): Promise<AuthModel>;
  updateMany(
    filter: DeepPartial<AuthModel>,
    options: UpdateAuthDto,
  ): Promise<AuthModel>;
  removeMany(filter: DeepPartial<AuthModel>): Promise<AuthModel>;
}
