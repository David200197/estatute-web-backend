import { Injectable } from '@nestjs/common';
import { AboutUsRepositoryModel } from '../models/about-us-repository.model';
import { AboutUssModel } from '../models/about-uss.model';
import { AboutUsModel } from '../models/about-us.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateAboutUsDto } from '../dto/create-about-us.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { AboutUss } from '../entities/about-uss';
import { UpdateAboutUsDto } from '../dto/update-about-us.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

@Injectable()
export class AboutUsLocalRepository implements AboutUsRepositoryModel {
  private aboutUsCrud: CrudMockMethods<AboutUsModel>;

  constructor() {
    this.aboutUsCrud = new CrudMockMethods();
  }

  async findOne(
    filter: DeepPartial<AboutUsModel>,
  ): Promise<AboutUsModel | null> {
    const aboutUs = this.aboutUsCrud.findOne(filter);
    return Promise.resolve(aboutUs);
  }

  async findAll(
    filter: DeepPartial<AboutUsModel>,
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
    return this.aboutUsCrud.create(options);
  }

  async updateOne(
    filter: DeepPartial<AboutUsModel>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel> {
    return this.aboutUsCrud.update(filter, options);
  }

  async removeOne(filter: DeepPartial<AboutUsModel>): Promise<AboutUsModel> {
    return this.aboutUsCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<AboutUsModel>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel> {
    return this.aboutUsCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<AboutUsModel>): Promise<AboutUsModel> {
    return this.aboutUsCrud.deleteMany(filter);
  }
}
