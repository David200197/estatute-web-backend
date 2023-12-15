import { PhotosModel } from './photos.model';
import { PhotoModel, PhotoProperties } from './photo.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { UpdatePhotoDto } from '../dto/update-photo.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface PhotoRepositoryModel {
  findOne(filter: DeepPartial<PhotoProperties>): Promise<PhotoModel | null>;
  findAll(
    filter: DeepPartial<PhotoProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<PhotosModel>>;
  create(options: CreatePhotoDto): Promise<PhotoModel>;
  updateOne(
    filter: DeepPartial<PhotoProperties>,
    options: UpdatePhotoDto,
  ): Promise<PhotoModel>;
  removeOne(filter: DeepPartial<PhotoProperties>): Promise<PhotoModel>;
  updateMany(
    filter: DeepPartial<PhotoProperties>,
    options: UpdatePhotoDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<PhotoProperties>): Promise<boolean>;
}
