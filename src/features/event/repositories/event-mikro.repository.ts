import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, QueryOrder } from '@mikro-orm/core';
import { FindAllDto, Order } from '@src/common/dto/find-all.dto';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { Paginator } from '@src/common/lib/paginator.lib';
import { EventRepositoryModel } from '../models/event-repository.model';
import { EventMikroEntity } from '../orm-entities/event-mikro.entity';
import { EventModel, EventProps } from '../models/event.model';
import { Event } from '../entities/event';
import { EventsModel } from '../models/events.model';
import { Events } from '../entities/events';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

@Injectable()
export class EventMikroRepository implements EventRepositoryModel {
  constructor(
    @InjectRepository(EventMikroEntity)
    private readonly eventRepository: EntityRepository<EventMikroEntity>,
  ) {}

  async findOne(filter: DeepPartial<EventProps>): Promise<EventModel> {
    const event = await this.eventRepository.findOne(filter);
    if (!event) return null;
    return Event.create(event);
  }

  async findAll(
    filter: DeepPartial<EventProps>,
    { order, orderBy, page, perPage }: FindAllDto = {},
  ): Promise<ResponseWithPaginate<EventsModel>> {
    const pagination = new Paginator({
      page: Number(page),
      perPage: Number(perPage),
    });
    const [events, totalElement] = await this.eventRepository.findAndCount(
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
      entities: Events.create(events),
      totalElement,
      totalPage: pagination.getTotalPage(totalElement),
    };
  }

  async create(options: CreateEventDto): Promise<EventModel> {
    const event = Event.create(options);
    const createdEvent = this.eventRepository.create(event.toObject());
    await this.eventRepository.nativeInsert(createdEvent);
    return event;
  }

  async updateOne(
    filter: DeepPartial<EventProps>,
    options: UpdateEventDto,
  ): Promise<EventModel | null> {
    const countUpdated = await this.eventRepository.nativeUpdate(
      filter,
      options,
    );
    if (!countUpdated) return null;
    const event = await this.findOne(filter);
    if (!event) return null;
    return event;
  }

  async removeOne(filter: DeepPartial<EventProps>): Promise<EventModel> {
    const event = await this.findOne(filter);
    if (!event) return null;
    const countDeleted = await this.eventRepository.nativeDelete(filter);
    if (!countDeleted) return null;
    return event;
  }

  async updateMany(
    filter: DeepPartial<EventProps>,
    options: UpdateEventDto,
  ): Promise<boolean> {
    const { entities: events } = await this.findAll(filter);
    const result = await events.mapParallel((event) =>
      this.eventRepository.nativeUpdate(event.toObject(), options),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }

  async removeMany(filter: DeepPartial<EventProps>): Promise<boolean> {
    const { entities: events } = await this.findAll(filter);
    const result = await events.mapParallel((event) =>
      this.eventRepository.nativeDelete(event.toObject()),
    );
    return result.every((res) => res.status === 'fulfilled' && res.value);
  }
}
