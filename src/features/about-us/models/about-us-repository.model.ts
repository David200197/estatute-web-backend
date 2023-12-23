import { AllAboutUsModel } from './all-about-us.model';
import { AboutUsModel, AboutUsProps } from './about-us.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAboutUsDto } from '../dto/create-about-us.dto';
import { UpdateAboutUsDto } from '../dto/update-about-us.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface AboutUsRepositoryModel {
  findOne(filter: DeepPartial<AboutUsProps>): Promise<AboutUsModel | null>;
  findAll(
    filter: DeepPartial<AboutUsProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AllAboutUsModel>>;
  create(options: CreateAboutUsDto): Promise<AboutUsModel>;
  updateOne(
    filter: DeepPartial<AboutUsProps>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel>;
  removeOne(filter: DeepPartial<AboutUsProps>): Promise<AboutUsModel>;
  updateMany(
    filter: DeepPartial<AboutUsProps>,
    options: UpdateAboutUsDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<AboutUsProps>): Promise<boolean>;
}
