import { Injectable } from '@nestjs/common';
import { AboutUsRepositoryModel } from '../models/about-us-repository.model';
import { AllAboutUsModel } from '../models/all-about-us.model';
import { AboutUsModel, AboutUsOnlyProperties } from '../models/about-us.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAboutUsDto } from '../dto/create-about-us.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { AllAboutUs } from '../entities/all-about-us';
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
    return this.aboutUsCrud.__getStore();
  }

  __isError(): boolean {
    return this.aboutUsCrud.__isError();
  }

  __setFindAllRes(value: any) {
    this.aboutUsCrud.__setFindAllRes(value);
  }

  __setFindOneRes(value: any) {
    this.aboutUsCrud.__setFindOneRes(value);
  }

  __setCreateRes(value: any) {
    this.aboutUsCrud.__setCreateRes(value);
  }

  __setUpdateRes(value: any) {
    this.aboutUsCrud.__setUpdateRes(value);
  }

  __setUpdateManyRes(value: any) {
    this.aboutUsCrud.__setUpdateManyRes(value);
  }

  __setDeleteManyRes(value: any) {
    this.aboutUsCrud.__setDeleteManyRes(value);
  }

  __setDeleteRes(value: any) {
    this.aboutUsCrud.__setDeleteRes(value);
  }

  async findOne(
    filter: DeepPartial<AboutUsOnlyProperties>,
  ): Promise<AboutUsModel | null> {
    const aboutUs = this.aboutUsCrud.findOne(filter);
    return Promise.resolve(aboutUs);
  }

  async findAll(
    filter: DeepPartial<AboutUsOnlyProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AllAboutUsModel>> {
    //using options
    options;
    //code
    const aboutUss = this.aboutUsCrud.findAll(filter);
    return Promise.resolve({
      entities: AllAboutUs.instance(aboutUss),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateAboutUsDto): Promise<AboutUsModel> {
    const aboutUs = new AboutUs(options);
    return this.aboutUsCrud.create(aboutUs);
  }

  async updateOne(
    filter: DeepPartial<AboutUsOnlyProperties>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel> {
    return this.aboutUsCrud.update(filter, options);
  }

  async removeOne(
    filter: DeepPartial<AboutUsOnlyProperties>,
  ): Promise<AboutUsModel> {
    return this.aboutUsCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<AboutUsOnlyProperties>,
    options: UpdateAboutUsDto,
  ): Promise<boolean> {
    return this.aboutUsCrud.updateMany(filter, options);
  }

  async removeMany(
    filter: DeepPartial<AboutUsOnlyProperties>,
  ): Promise<boolean> {
    return this.aboutUsCrud.deleteMany(filter);
  }
}
