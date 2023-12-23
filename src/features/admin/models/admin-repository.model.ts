import { AdminsModel } from './admins.model';
import { AdminModel, AdminProps } from './admin.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { UpdateAdminDto } from '../dto/update-admin.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface AdminRepositoryModel {
  findOne(filter: DeepPartial<AdminProps>): Promise<AdminModel | null>;
  findAll(
    filter: DeepPartial<AdminProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AdminsModel>>;
  create(options: CreateAdminDto): Promise<AdminModel>;
  updateOne(
    filter: DeepPartial<AdminProps>,
    options: UpdateAdminDto,
  ): Promise<AdminModel>;
  removeOne(filter: DeepPartial<AdminProps>): Promise<AdminModel>;
  updateMany(
    filter: DeepPartial<AdminProps>,
    options: UpdateAdminDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<AdminProps>): Promise<boolean>;
}
