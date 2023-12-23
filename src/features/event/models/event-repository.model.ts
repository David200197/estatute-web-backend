import { EventsModel } from './events.model';
import { EventModel, EventProps } from './event.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';
import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export interface EventRepositoryModel {
  findOne(filter: DeepPartial<EventProps>): Promise<EventModel | null>;
  findAll(
    filter: DeepPartial<EventProps>,
    options: FindAllDto,
  ): Promise<ResponseWithPaginate<EventsModel>>;
  create(options: SelfPartial<EventProps, 'uuid'>): Promise<EventModel>;
  updateOne(
    filter: DeepPartial<EventProps>,
    options: DeepPartial<EventProps>,
  ): Promise<EventModel>;
  removeOne(filter: DeepPartial<EventProps>): Promise<EventModel>;
  updateMany(
    filter: DeepPartial<EventProps>,
    options: DeepPartial<EventProps>,
  ): Promise<boolean>;
  removeMany(filter: DeepPartial<EventProps>): Promise<boolean>;
}
