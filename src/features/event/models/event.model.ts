import { EntityModel } from '@src/common/abstracts/entity.abstract';
import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface EventModel extends EntityModel {
  readonly uuid: string;
}

export type EventProperties = NonFunctionProperties<EventModel>;
