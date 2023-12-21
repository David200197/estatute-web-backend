import { Injectable } from '@nestjs/common';
import { AboutUsMikroEntity } from '../orm/about-us-mikro.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { AboutUsRepositoryModel } from '../models/about-us-repository.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { CreateAboutUsDto } from '../dto/create-about-us.dto';
import { UpdateAboutUsDto } from '../dto/update-about-us.dto';
import { AboutUsModel, AboutUsProperties } from '../models/about-us.model';
import { AllAboutUsModel } from '../models/all-about-us.model';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AboutUs } from '../entities/about-us';

@Injectable()
export class AboutUsMikroRepository implements AboutUsRepositoryModel {
  constructor(
    @InjectRepository(AboutUsMikroEntity)
    private readonly aboutUsRepository: EntityRepository<AboutUsMikroEntity>,
  ) {}
  async findOne(filter: DeepPartial<AboutUsProperties>): Promise<AboutUsModel> {
    const aboutUs = await this.aboutUsRepository.findOne(filter);
    return new AboutUs(aboutUs);
  }
  findAll(
    filter: DeepPartial<AboutUsProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<AllAboutUsModel>> {
    throw new Error('Method not implemented.');
  }
  async create(options: CreateAboutUsDto): Promise<AboutUsModel> {
    const aboutUs = this.aboutUsRepository.create(options);
    return new AboutUs(aboutUs);
  }
  updateOne(
    filter: DeepPartial<AboutUsProperties>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel> {
    throw new Error('Method not implemented.');
  }
  removeOne(filter: DeepPartial<AboutUsProperties>): Promise<AboutUsModel> {
    throw new Error('Method not implemented.');
  }
  updateMany(
    filter: DeepPartial<AboutUsProperties>,
    options: UpdateAboutUsDto,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  removeMany(filter: DeepPartial<AboutUsProperties>): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
