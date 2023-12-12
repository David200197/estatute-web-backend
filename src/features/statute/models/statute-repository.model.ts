import { StatutesModel } from './statutes.model';
import { StatuteModel, StatuteProperties } from './statute.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateStatuteDto } from '../dto/create-statute.dto';
import { UpdateStatuteDto } from '../dto/update-statute.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface StatuteRepositoryModel {
  findOne(filter: DeepPartial<StatuteProperties>): Promise<StatuteModel | null>;
  findAll(
    filter: DeepPartial<StatuteProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<StatutesModel>>;
  create(options: CreateStatuteDto): Promise<StatuteModel>;
  updateOne(
    filter: DeepPartial<StatuteProperties>,
    options: UpdateStatuteDto,
  ): Promise<StatuteModel>;
  removeOne(filter: DeepPartial<StatuteProperties>): Promise<StatuteModel>;
  updateMany(
    filter: DeepPartial<StatuteProperties>,
    options: UpdateStatuteDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<StatuteProperties>): Promise<boolean>;
}
