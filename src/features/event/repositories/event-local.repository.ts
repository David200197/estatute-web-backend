import { Injectable } from '@nestjs/common';
import { EventRepositoryModel } from '../models/event-repository.model';
import { EventsModel } from '../models/events.model';
import { EventModel } from '../models/event.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateEventDto } from '../dto/create-event.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Events } from '../entities/events';
import { UpdateEventDto } from '../dto/update-event.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

@Injectable()
export class EventLocalRepository implements EventRepositoryModel {
  private eventCrud: CrudMockMethods<EventModel>;

  constructor() {
    this.eventCrud = new CrudMockMethods();
  }

  async findOne(filter: DeepPartial<EventModel>): Promise<EventModel | null> {
    const event = this.eventCrud.findOne(filter);
    return Promise.resolve(event);
  }

  async findAll(
    filter: DeepPartial<EventModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<EventsModel>> {
    //using options
    options;
    //code
    const events = this.eventCrud.findAll(filter);
    return Promise.resolve({
      entities: new Events(events),
      totalElement: 1,
      totalPage: 1,
    });
  }

  async create(options: CreateEventDto): Promise<EventModel> {
    return this.eventCrud.create(options);
  }

  async updateOne(
    filter: DeepPartial<EventModel>,
    options: UpdateEventDto,
  ): Promise<EventModel> {
    return this.eventCrud.update(filter, options);
  }

  async removeOne(filter: DeepPartial<EventModel>): Promise<EventModel> {
    return this.eventCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<EventModel>,
    options: UpdateEventDto,
  ): Promise<EventModel> {
    return this.eventCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<EventModel>): Promise<EventModel> {
    return this.eventCrud.deleteMany(filter);
  }
}
