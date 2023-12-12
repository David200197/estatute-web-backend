import { EventsModel } from './events.model';
import { EventModel, EventProperties } from './event.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface EventRepositoryModel {
  findOne(filter: DeepPartial<EventProperties>): Promise<EventModel | null>;
  findAll(
    filter: DeepPartial<EventProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<EventsModel>>;
  create(options: CreateEventDto): Promise<EventModel>;
  updateOne(
    filter: DeepPartial<EventProperties>,
    options: UpdateEventDto,
  ): Promise<EventModel>;
  removeOne(filter: DeepPartial<EventProperties>): Promise<EventModel>;
  updateMany(
    filter: DeepPartial<EventProperties>,
    options: UpdateEventDto,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<EventProperties>): Promise<boolean>;
}
