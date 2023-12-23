import { Injectable } from '@nestjs/common';
import { AboutUsRepositoryModel } from '../models/about-us-repository.model';
import { AllAboutUsModel } from '../models/all-about-us.model';
import { AboutUsModel, AboutUsProps } from '../models/about-us.model';
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
  private aboutUsCrud: CrudMockMethods<AboutUsProps>;

  constructor() {
    this.aboutUsCrud = new CrudMockMethods();
  }

  __changeStore(store: AboutUsModel[]): void {
    this.aboutUsCrud.__changeStore(store.map((data) => data.toObject()));
  }

  __reset(): void {
    this.aboutUsCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.aboutUsCrud.__setIsError(value);
  }

  __getStore(): AboutUsModel[] {
    return this.aboutUsCrud.__getStore().map((data) => AboutUs.create(data));
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
    filter: DeepPartial<AboutUsProps>,
  ): Promise<AboutUsModel | null> {
    const aboutUs = this.aboutUsCrud.findOne(filter);
    return Promise.resolve(AboutUs.create(aboutUs));
  }

  async findAll(
    filter: DeepPartial<AboutUsProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AllAboutUsModel>> {
    //using options
    options;
    //code
    const allAboutUs = this.aboutUsCrud.findAll(filter);
    return Promise.resolve({
      entities: AllAboutUs.create(allAboutUs),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateAboutUsDto): Promise<AboutUsModel> {
    const aboutUs = AboutUs.create(options);
    this.aboutUsCrud.create(aboutUs.toObject());
    return aboutUs;
  }

  async updateOne(
    filter: DeepPartial<AboutUsProps>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel> {
    const aboutUs = this.aboutUsCrud.update(filter, options);
    return AboutUs.create(aboutUs);
  }

  async removeOne(filter: DeepPartial<AboutUsProps>): Promise<AboutUsModel> {
    const aboutUs = this.aboutUsCrud.delete(filter);
    return AboutUs.create(aboutUs);
  }

  async updateMany(
    filter: DeepPartial<AboutUsProps>,
    options: UpdateAboutUsDto,
  ): Promise<boolean> {
    return this.aboutUsCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<AboutUsProps>): Promise<boolean> {
    return this.aboutUsCrud.deleteMany(filter);
  }
}
