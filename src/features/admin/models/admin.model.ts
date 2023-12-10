import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface AdminModel {
  readonly username: string;
  readonly password: string;
  readonly refreshToken: string;
}

export type AdminProperties = NonFunctionProperties<AdminModel>;
