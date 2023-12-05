import { EventsModel } from './events.model';
import { EventModel } from './event.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface EventRepositoryModel {
  findOne(filter: DeepPartial<EventModel>): Promise<EventModel | null>;
  findAll(
    filter: DeepPartial<EventModel>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<EventsModel>>;
  create(options: CreateEventDto): Promise<EventModel>;
  updateOne(
    filter: DeepPartial<EventModel>,
    options: UpdateEventDto,
  ): Promise<EventModel>;
  removeOne(filter: DeepPartial<EventModel>): Promise<EventModel>;
  updateMany(
    filter: DeepPartial<EventModel>,
    options: UpdateEventDto,
  ): Promise<EventModel>;
  removeMany(filter: DeepPartial<EventModel>): Promise<EventModel>;
}
