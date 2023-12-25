import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, QueryOrder } from '@mikro-orm/core';
import { FindAllDto, Order } from '@src/common/dto/find-all.dto';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { Paginator } from '@src/common/lib/paginator.lib';
import { AnniversaryRepositoryModel } from '../models/anniversary-repository.model';
import { AnniversaryMikroEntity } from '../orm-entities/anniversary-mikro.entity';
import {
  AnniversaryModel,
  AnniversaryProps,
} from '../models/anniversary.model';
import { Anniversary } from '../entities/anniversary';
import { Anniversaries } from '../entities/anniversaries';
import { AnniversariesModel } from '../models/anniversaries.model';
import { CreateAnniversaryDto } from '../dto/create-anniversary.dto';
import { UpdateAnniversaryDto } from '../dto/update-anniversary.dto';

@Injectable()
export class AnniversaryMikroRepository implements AnniversaryRepositoryModel {
  constructor(
    @InjectRepository(AnniversaryMikroEntity)
    private readonly anniversaryRepository: EntityRepository<AnniversaryMikroEntity>,
  ) {}

  async findOne(
    filter: DeepPartial<AnniversaryProps>,
  ): Promise<AnniversaryModel> {
    const anniversary = await this.anniversaryRepository.findOne(filter);
    if (!anniversary) return null;
    return Anniversary.create(anniversary);
  }

  async findAll(
    filter: DeepPartial<AnniversaryProps>,
    { order, orderBy, page, perPage }: FindAllDto = {},
  ): Promise<ResponseWithPaginate<AnniversariesModel>> {
    const pagination = new Paginator({
      page: Number(page),
      perPage: Number(perPage),
    });
    const [anniversaries, totalElement] =
      await this.anniversaryRepository.findAndCount(filter, {
        limit: perPage ? pagination.limit : null,
        offset: perPage ? pagination.offset : null,
        orderBy: orderBy
          ? {
              [orderBy]: order === Order.ASC ? QueryOrder.ASC : QueryOrder.DESC,
            }
          : null,
      });
    return {
      entities: Anniversaries.create(anniversaries),
      totalElement,
      totalPage: pagination.getTotalPage(totalElement),
    };
  }

  async create(options: CreateAnniversaryDto): Promise<AnniversaryModel> {
    const anniversary = Anniversary.create(options);
    const createdAnniversary = this.anniversaryRepository.create(
      anniversary.toObject(),
    );
    await this.anniversaryRepository.nativeInsert(createdAnniversary);
    return anniversary;
  }

  async updateOne(
    filter: DeepPartial<AnniversaryProps>,
    options: UpdateAnniversaryDto,
  ): Promise<AnniversaryModel | null> {
    const foundedAnniversary = await this.findOne(filter);
    if (!foundedAnniversary) return null;

    const updateOptions = this.anniversaryRepository.create({
      ...filter,
      ...options,
    });
    const countUpdated = await this.anniversaryRepository.nativeUpdate(
      filter,
      updateOptions,
    );

    if (!countUpdated) return null;
    const anniversary = await this.findOne(filter);
    if (!anniversary) return null;
    return anniversary;
  }

  async removeOne(
    filter: DeepPartial<AnniversaryProps>,
  ): Promise<AnniversaryModel> {
    const anniversary = await this.findOne(filter);
    if (!anniversary) return null;
    const countDeleted = await this.anniversaryRepository.nativeDelete(filter);
    if (!countDeleted) return null;
    return anniversary;
  }

  async updateMany(
    filter: DeepPartial<AnniversaryProps>,
    options: UpdateAnniversaryDto,
  ): Promise<boolean> {
    const { entities: anniversaries } = await this.findAll(filter);
    const result = await anniversaries.mapParallel((anniversary) =>
      this.anniversaryRepository.nativeUpdate(anniversary.toObject(), options),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }

  async removeMany(filter: DeepPartial<AnniversaryProps>): Promise<boolean> {
    const { entities: anniversaries } = await this.findAll(filter);
    const result = await anniversaries.mapParallel((anniversary) =>
      this.anniversaryRepository.nativeDelete(anniversary.toObject()),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }
}
