import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, QueryOrder } from '@mikro-orm/core';
import { FindAllDto, Order } from '@src/common/dto/find-all.dto';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { Paginator } from '@src/common/lib/paginator.lib';
import { StatuteRepositoryModel } from '../models/statute-repository.model';
import { StatuteMikroEntity } from '../orm-entities/statute-mikro.entity';
import { StatuteModel, StatuteProps } from '../models/statute.model';
import { Statute } from '../entities/statute';
import { StatutesModel } from '../models/statutes.model';
import { Statutes } from '../entities/statutes';
import { CreateStatuteDto } from '../dto/create-statute.dto';
import { UpdateStatuteDto } from '../dto/update-statute.dto';

@Injectable()
export class StatuteMikroRepository implements StatuteRepositoryModel {
  constructor(
    @InjectRepository(StatuteMikroEntity)
    private readonly statuteRepository: EntityRepository<StatuteMikroEntity>,
  ) {}

  async findOne(filter: DeepPartial<StatuteProps>): Promise<StatuteModel> {
    const statute = await this.statuteRepository.findOne(filter);
    if (!statute) return null;
    return Statute.create(statute);
  }

  async findAll(
    filter: DeepPartial<StatuteProps>,
    { order, orderBy, page, perPage }: FindAllDto = {},
  ): Promise<ResponseWithPaginate<StatutesModel>> {
    const pagination = new Paginator({
      page: Number(page),
      perPage: Number(perPage),
    });
    const [statutes, totalElement] = await this.statuteRepository.findAndCount(
      filter,
      {
        limit: perPage ? pagination.limit : null,
        offset: perPage ? pagination.offset : null,
        orderBy: orderBy
          ? {
              [orderBy]: order === Order.ASC ? QueryOrder.ASC : QueryOrder.DESC,
            }
          : null,
      },
    );
    return {
      entities: Statutes.create(statutes),
      totalElement,
      totalPage: pagination.getTotalPage(totalElement),
    };
  }

  async create(options: CreateStatuteDto): Promise<StatuteModel> {
    const statute = Statute.create(options);
    const createdStatute = this.statuteRepository.create(statute.toObject());
    await this.statuteRepository.nativeInsert(createdStatute);
    return statute;
  }

  async updateOne(
    filter: DeepPartial<StatuteProps>,
    options: UpdateStatuteDto,
  ): Promise<StatuteModel | null> {
    const foundedStatute = await this.findOne(filter);
    if (!foundedStatute) return null;

    const updateOptions = this.statuteRepository.create({
      ...filter,
      ...options,
    });
    const countUpdated = await this.statuteRepository.nativeUpdate(
      filter,
      updateOptions,
    );

    if (!countUpdated) return null;
    const statute = await this.findOne(filter);
    if (!statute) return null;
    return statute;
  }

  async removeOne(filter: DeepPartial<StatuteProps>): Promise<StatuteModel> {
    const statute = await this.findOne(filter);
    if (!statute) return null;
    const countDeleted = await this.statuteRepository.nativeDelete(filter);
    if (!countDeleted) return null;
    return statute;
  }

  async updateMany(
    filter: DeepPartial<StatuteProps>,
    options: UpdateStatuteDto,
  ): Promise<boolean> {
    const { entities: statutes } = await this.findAll(filter);
    const result = await statutes.mapParallel((statute) =>
      this.statuteRepository.nativeUpdate(statute.toObject(), options),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }

  async removeMany(filter: DeepPartial<StatuteProps>): Promise<boolean> {
    const { entities: statutes } = await this.findAll(filter);
    const result = await statutes.mapParallel((statute) =>
      this.statuteRepository.nativeDelete(statute.toObject()),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }
}
