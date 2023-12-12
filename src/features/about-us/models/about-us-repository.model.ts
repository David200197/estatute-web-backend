import { AboutUssModel } from './about-uss.model';
import { AboutUsModel, AboutUsProperties } from './about-us.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAboutUsDto } from '../dto/create-about-us.dto';
import { UpdateAboutUsDto } from '../dto/update-about-us.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface AboutUsRepositoryModel {
  findOne(filter: DeepPartial<AboutUsProperties>): Promise<AboutUsModel | null>;
  findAll(
    filter: DeepPartial<AboutUsProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AboutUssModel>>;
  create(options: CreateAboutUsDto): Promise<AboutUsModel>;
  updateOne(
    filter: DeepPartial<AboutUsProperties>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel>;
  removeOne(filter: DeepPartial<AboutUsProperties>): Promise<AboutUsModel>;
  updateMany(
    filter: DeepPartial<AboutUsProperties>,
    options: UpdateAboutUsDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<AboutUsProperties>): Promise<boolean>;
}
