import { StatutesModel } from './statutes.model';
import { StatuteModel, StatuteProps } from './statute.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateStatuteDto } from '../dto/create-statute.dto';
import { UpdateStatuteDto } from '../dto/update-statute.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface StatuteRepositoryModel {
  findOne(filter: DeepPartial<StatuteProps>): Promise<StatuteModel | null>;
  findAll(
    filter: DeepPartial<StatuteProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<StatutesModel>>;
  create(options: CreateStatuteDto): Promise<StatuteModel>;
  updateOne(
    filter: DeepPartial<StatuteProps>,
    options: UpdateStatuteDto,
  ): Promise<StatuteModel>;
  removeOne(filter: DeepPartial<StatuteProps>): Promise<StatuteModel>;
  updateMany(
    filter: DeepPartial<StatuteProps>,
    options: UpdateStatuteDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<StatuteProps>): Promise<boolean>;
}
