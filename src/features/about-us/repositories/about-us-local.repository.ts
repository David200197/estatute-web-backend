import { Injectable } from '@nestjs/common';
import { AboutUsRepositoryModel } from '../models/about-us-repository.model';
import { AboutUssModel } from '../models/about-uss.model';
import { AboutUsModel, AboutUsProperties } from '../models/about-us.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAboutUsDto } from '../dto/create-about-us.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { AboutUss } from '../entities/about-uss';
import { UpdateAboutUsDto } from '../dto/update-about-us.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { HelperMockMethods } from '@src/common/interfaces/helper-mock.methods';
import { AboutUs } from '../entities/about-us';

@Injectable()
export class AboutUsLocalRepository
  implements AboutUsRepositoryModel, HelperMockMethods<AboutUsModel>
{
  private aboutUsCrud: CrudMockMethods<AboutUsModel>;

  constructor() {
    this.aboutUsCrud = new CrudMockMethods();
  }

  __changeStore(store: AboutUsModel[]): void {
    this.aboutUsCrud.__changeStore(store);
  }

  __reset(): void {
    this.aboutUsCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.aboutUsCrud.__setIsError(value);
  }

  __getStore(): AboutUsModel[] {
    return this.__getStore();
  }

  __isError(): boolean {
    return this.__isError();
  }

  async findOne(
    filter: DeepPartial<AboutUsProperties>,
  ): Promise<AboutUsModel | null> {
    const aboutUs = this.aboutUsCrud.findOne(filter);
    return Promise.resolve(aboutUs);
  }

  async findAll(
    filter: DeepPartial<AboutUsProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AboutUssModel>> {
    //using options
    options;
    //code
    const aboutUss = this.aboutUsCrud.findAll(filter);
    return Promise.resolve({
      entities: new AboutUss(aboutUss),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateAboutUsDto): Promise<AboutUsModel> {
    const aboutUs = new AboutUs(options);
    return this.aboutUsCrud.create(aboutUs);
  }

  async updateOne(
    filter: DeepPartial<AboutUsProperties>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel> {
    return this.aboutUsCrud.update(filter, options);
  }

  async removeOne(
    filter: DeepPartial<AboutUsProperties>,
  ): Promise<AboutUsModel> {
    return this.aboutUsCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<AboutUsProperties>,
    options: UpdateAboutUsDto,
  ): Promise<boolean> {
    return this.aboutUsCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<AboutUsProperties>): Promise<boolean> {
    return this.aboutUsCrud.deleteMany(filter);
  }
}
