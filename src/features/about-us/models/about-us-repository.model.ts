import { AboutUssModel } from './about-uss.model';
import { AboutUsModel } from './about-us.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAboutUsDto } from '../dto/create-about-us.dto';
import { UpdateAboutUsDto } from '../dto/update-about-us.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface AboutUsRepositoryModel {
  findOne(filter: DeepPartial<AboutUsModel>): Promise<AboutUsModel | null>;
  findAll(
    filter: DeepPartial<AboutUsModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AboutUssModel>>;
  create(options: CreateAboutUsDto): Promise<AboutUsModel>;
  updateOne(
    filter: DeepPartial<AboutUsModel>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel>;
  removeOne(filter: DeepPartial<AboutUsModel>): Promise<AboutUsModel>;
  updateMany(
    filter: DeepPartial<AboutUsModel>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel>;
  removeMany(filter: DeepPartial<AboutUsModel>): Promise<AboutUsModel>;
}
