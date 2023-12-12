import { EntityModel } from '@src/common/abstracts/entity.abstract';
import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface StatuteModel extends EntityModel {
  readonly uuid: string;
}

export type StatuteProperties = NonFunctionProperties<StatuteModel>;
