import { Injectable } from '@nestjs/common';
import { AboutUsMikroEntity } from '../orm-entities/about-us-mikro.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, QueryOrder } from '@mikro-orm/core';
import { AboutUsRepositoryModel } from '../models/about-us-repository.model';
import { FindAllDto, Order } from '@src/common/dto/find-all.dto';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { CreateAboutUsDto } from '../dto/create-about-us.dto';
import { UpdateAboutUsDto } from '../dto/update-about-us.dto';
import { AboutUsModel, AboutUsOnlyProperties } from '../models/about-us.model';
import { AllAboutUsModel } from '../models/all-about-us.model';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AboutUs } from '../entities/about-us';
import { Paginator } from '@src/common/lib/paginator.lib';
import { AllAboutUs } from '../entities/all-about-us';

@Injectable()
export class AboutUsMikroRepository implements AboutUsRepositoryModel {
  constructor(
    @InjectRepository(AboutUsMikroEntity)
    private readonly aboutUsRepository: EntityRepository<AboutUsMikroEntity>,
  ) {}

  async findOne(
    filter: DeepPartial<AboutUsOnlyProperties>,
  ): Promise<AboutUsModel> {
    const aboutUs = await this.aboutUsRepository.findOne(filter);
    return new AboutUs(aboutUs);
  }

  async findAll(
    filter: DeepPartial<AboutUsOnlyProperties>,
    { order, orderBy, page, perPage }: FindAllDto = {},
  ): Promise<ResponseWithPaginate<AllAboutUsModel>> {
    const pagination = new Paginator({
      page: Number(page),
      perPage: Number(perPage),
    });
    const [allAboutUS, totalElement] =
      await this.aboutUsRepository.findAndCount(filter, {
        limit: perPage ? pagination.limit : null,
        offset: perPage ? pagination.offset : null,
        orderBy: orderBy
          ? {
              [orderBy]: order === Order.ASC ? QueryOrder.ASC : QueryOrder.DESC,
            }
          : null,
      });
    return {
      entities: AllAboutUs.instance(allAboutUS as AboutUs[]),
      totalElement,
      totalPage: pagination.getTotalPage(totalElement),
    };
  }

  async create(options: CreateAboutUsDto): Promise<AboutUsModel> {
    const aboutUs = new AboutUs(options);
    const createdAboutUs = this.aboutUsRepository.create(aboutUs);
    await this.aboutUsRepository.nativeInsert(createdAboutUs);
    return aboutUs;
  }

  async updateOne(
    filter: DeepPartial<AboutUsOnlyProperties>,
    options: UpdateAboutUsDto,
  ): Promise<AboutUsModel | null> {
    const countUpdated = await this.aboutUsRepository.nativeUpdate(
      filter,
      options,
    );
    if (!countUpdated) return null;
    const aboutUs = await this.findOne(filter);
    if (!aboutUs) return null;
    return new AboutUs(aboutUs);
  }

  async removeOne(
    filter: DeepPartial<AboutUsOnlyProperties>,
  ): Promise<AboutUsModel> {
    const aboutUs = await this.findOne(filter);
    if (!aboutUs) return null;
    const countDeleted = await this.aboutUsRepository.nativeDelete(filter);
    if (!countDeleted) return null;
    return new AboutUs(aboutUs);
  }

  async updateMany(
    filter: DeepPartial<AboutUsOnlyProperties>,
    options: UpdateAboutUsDto,
  ): Promise<boolean> {
    const { entities: allAboutUs } = await this.findAll(filter);
    const result = await allAboutUs.mapParallel((aboutUs) =>
      this.aboutUsRepository.nativeUpdate(aboutUs, options),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }

  async removeMany(
    filter: DeepPartial<AboutUsOnlyProperties>,
  ): Promise<boolean> {
    const { entities: allAboutUs } = await this.findAll(filter);
    const result = await allAboutUs.mapParallel((aboutUs) =>
      this.aboutUsRepository.nativeDelete(aboutUs),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }
}
