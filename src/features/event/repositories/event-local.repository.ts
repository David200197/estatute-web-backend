import { Injectable } from '@nestjs/common';
import { EventRepositoryModel } from '../models/event-repository.model';
import { EventsModel } from '../models/events.model';
import { EventModel, EventProperties } from '../models/event.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateEventDto } from '../dto/create-event.dto';
import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { Events } from '../entities/events';
import { UpdateEventDto } from '../dto/update-event.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { HelperMockMethods } from '@src/common/interfaces/helper-mock.methods';
import { Event } from '../entities/event';

@Injectable()
export class EventLocalRepository
  implements EventRepositoryModel, HelperMockMethods<EventModel>
{
  private eventCrud: CrudMockMethods<EventModel>;

  constructor() {
    this.eventCrud = new CrudMockMethods();
  }

  __changeStore(store: EventModel[]): void {
    this.eventCrud.__changeStore(store);
  }

  __reset(): void {
    this.eventCrud.__reset();
  }

  __setIsError(value: boolean): void {
    this.eventCrud.__setIsError(value);
  }

  __getStore(): EventModel[] {
    return this.__getStore();
  }

  __isError(): boolean {
    return this.__isError();
  }

  async findOne(
    filter: DeepPartial<EventProperties>,
  ): Promise<EventModel | null> {
    const event = this.eventCrud.findOne(filter);
    return Promise.resolve(event);
  }

  async findAll(
    filter: DeepPartial<EventProperties>,
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
    const event = new Event(options);
    return this.eventCrud.create(event);
  }

  async updateOne(
    filter: DeepPartial<EventProperties>,
    options: UpdateEventDto,
  ): Promise<EventModel> {
    return this.eventCrud.update(filter, options);
  }

  async removeOne(filter: DeepPartial<EventProperties>): Promise<EventModel> {
    return this.eventCrud.delete(filter);
  }

  async updateMany(
    filter: DeepPartial<EventProperties>,
    options: UpdateEventDto,
  ): Promise<boolean> {
    return this.eventCrud.updateMany(filter, options);
  }

  async removeMany(filter: DeepPartial<EventProperties>): Promise<boolean> {
    return this.eventCrud.deleteMany(filter);
  }
}
