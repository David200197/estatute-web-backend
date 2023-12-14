import { EntityModel } from '@src/common/abstracts/entity.abstract';
import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface AdminModel extends EntityModel {
  readonly username: string;
  readonly password: string;
  readonly refreshToken?: string;
}

export type AdminProperties = NonFunctionProperties<AdminModel>;
