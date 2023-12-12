import { EntityModel } from '@src/common/abstracts/entity.abstract';
import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface AboutUsModel extends EntityModel {
  readonly uuid: string;
}

export type AboutUsProperties = NonFunctionProperties<AboutUsModel>;
