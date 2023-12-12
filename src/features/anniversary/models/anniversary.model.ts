import { EntityModel } from '@src/common/abstracts/entity.abstract';
import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface AnniversaryModel extends EntityModel {
  readonly uuid: string;
}

export type AnniversaryProperties = NonFunctionProperties<AnniversaryModel>;
