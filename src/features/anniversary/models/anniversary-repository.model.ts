import { AnniversarysModel } from './anniversarys.model';
import { AnniversaryModel } from './anniversary.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAnniversaryDto } from '../dto/create-anniversary.dto';
import { UpdateAnniversaryDto } from '../dto/update-anniversary.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface AnniversaryRepositoryModel {
  findOne(
    filter: DeepPartial<AnniversaryModel>,
  ): Promise<AnniversaryModel | null>;
  findAll(
    filter: DeepPartial<AnniversaryModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AnniversarysModel>>;
  create(options: CreateAnniversaryDto): Promise<AnniversaryModel>;
  updateOne(
    filter: DeepPartial<AnniversaryModel>,
    options: UpdateAnniversaryDto,
  ): Promise<AnniversaryModel>;
  removeOne(filter: DeepPartial<AnniversaryModel>): Promise<AnniversaryModel>;
  updateMany(
    filter: DeepPartial<AnniversaryModel>,
    options: UpdateAnniversaryDto,
  ): Promise<AnniversaryModel>;
  removeMany(filter: DeepPartial<AnniversaryModel>): Promise<AnniversaryModel>;
}
