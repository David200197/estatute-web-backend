import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface AdminModel {
  readonly username: string;
  readonly password: string;
}

export type AdminProperties = NonFunctionProperties<AdminModel>;
