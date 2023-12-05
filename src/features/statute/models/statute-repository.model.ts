import { StatutesModel } from './statutes.model';
import { StatuteModel } from './statute.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateStatuteDto } from '../dto/create-statute.dto';
import { UpdateStatuteDto } from '../dto/update-statute.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface StatuteRepositoryModel {
  findOne(filter: DeepPartial<StatuteModel>): Promise<StatuteModel | null>;
  findAll(
    filter: DeepPartial<StatuteModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<StatutesModel>>;
  create(options: CreateStatuteDto): Promise<StatuteModel>;
  updateOne(
    filter: DeepPartial<StatuteModel>,
    options: UpdateStatuteDto,
  ): Promise<StatuteModel>;
  removeOne(filter: DeepPartial<StatuteModel>): Promise<StatuteModel>;
  updateMany(
    filter: DeepPartial<StatuteModel>,
    options: UpdateStatuteDto,
  ): Promise<StatuteModel>;
  removeMany(filter: DeepPartial<StatuteModel>): Promise<StatuteModel>;
}
