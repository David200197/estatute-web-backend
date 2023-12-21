import { EntityModel } from '@src/common/abstracts/entity.abstract';
import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface SocialNetworkModel extends EntityModel {
  readonly uuid: string;
  readonly name: string;
  readonly link: string;
  readonly icon: string;
}

export type SocialNetworkProperties = NonFunctionProperties<SocialNetworkModel>;
