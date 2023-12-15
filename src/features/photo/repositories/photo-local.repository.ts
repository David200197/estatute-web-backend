import { Injectable } from '@nestjs/common';
import { PhotoRepositoryModel } from '../models/photo-repository.model';
import { PhotosModel } from '../models/photos.model';
import { PhotoModel, PhotoProperties } from '../models/photo.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Photos } from '../entities/photos';
import { UpdatePhotoDto } from '../dto/update-photo.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { HelperMockMethods } from '@src/common/interfaces/helper-mock.methods';
import { Photo } from '../entities/photo';

@Injectable()
export class PhotoLocalRepository
  implements PhotoRepositoryModel, HelperMockMethods<PhotoModel>
{
  private photoCrud: CrudMockMethods<PhotoModel>;

  constructor() {
    this.photoCrud = new CrudMockMethods();
  }

  __changeStore(store: PhotoModel[]): void {
    this.photoCrud.__changeStore(store);
  }

  __reset(): void {
    this.photoCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.photoCrud.__setIsError(value);
  }

  __getStore(): PhotoModel[] {
    return this.__getStore();
  }

  __isError(): boolean {
    return this.__isError();
  }

  async findOne(
    filter: DeepPartial<PhotoProperties>,
  ): Promise<PhotoModel | null> {
    const photo = this.photoCrud.findOne(filter);
    return Promise.resolve(photo);
  }

  async findAll(
    filter: DeepPartial<PhotoProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<PhotosModel>> {
    //using options
    options;
    //code
    const photos = this.photoCrud.findAll(filter);
    return Promise.resolve({
      entities: new Photos(photos),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreatePhotoDto): Promise<PhotoModel> {
    const photo = new Photo(options);
    return this.photoCrud.create(photo);
  }

  async updateOne(
    filter: DeepPartial<PhotoProperties>,
    options: UpdatePhotoDto,
  ): Promise<PhotoModel> {
    return this.photoCrud.update(filter, options);
  }

  async removeOne(filter: DeepPartial<PhotoProperties>): Promise<PhotoModel> {
    return this.photoCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<PhotoProperties>,
    options: UpdatePhotoDto,
  ): Promise<boolean> {
    return this.photoCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<PhotoProperties>): Promise<boolean> {
    return this.photoCrud.deleteMany(filter);
  }
}
