import { EventsModel } from './events.model';
import { EventModel, EventProperties } from './event.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';

export interface EventRepositoryModel {
  findOne(filter: DeepPartial<EventProperties>): Promise<EventModel | null>;
  findAll(
    filter: DeepPartial<EventProperties>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<EventsModel>>;
  create(options: EventProperties): Promise<EventModel>;
  updateOne(
    filter: DeepPartial<EventProperties>,
    options: DeepPartial<EventProperties>,
  ): Promise<EventModel>;
  removeOne(filter: DeepPartial<EventProperties>): Promise<EventModel>;
  updateMany(
    filter: DeepPartial<EventProperties>,
    options: DeepPartial<EventProperties>,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<EventProperties>): Promise<boolean>;
}
