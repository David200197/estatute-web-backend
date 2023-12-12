import { EntityModel } from '@src/common/abstracts/entity.abstract';
import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface SocialNetworksModel extends EntityModel {
  readonly uuid: string;
}

export type SocialNetworksProperties =
  NonFunctionProperties<SocialNetworksModel>;
