import { AnniversariesModel } from './anniversaries.model';
import { AnniversaryModel, AnniversaryProps } from './anniversary.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAnniversaryDto } from '../dto/create-anniversary.dto';
import { UpdateAnniversaryDto } from '../dto/update-anniversary.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface AnniversaryRepositoryModel {
  findOne(
    filter: DeepPartial<AnniversaryProps>,
  ): Promise<AnniversaryModel | null>;
  findAll(
    filter: DeepPartial<AnniversaryProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AnniversariesModel>>;
  create(options: CreateAnniversaryDto): Promise<AnniversaryModel>;
  updateOne(
    filter: DeepPartial<AnniversaryProps>,
    options: UpdateAnniversaryDto,
  ): Promise<AnniversaryModel>;
  removeOne(filter: DeepPartial<AnniversaryProps>): Promise<AnniversaryModel>;
  updateMany(
    filter: DeepPartial<AnniversaryProps>,
    options: UpdateAnniversaryDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<AnniversaryProps>): Promise<boolean>;
}
