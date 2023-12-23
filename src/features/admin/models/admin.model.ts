import { EntityModel } from '@src/common/abstracts/entity.abstract';

export type AdminProps = {
  readonly username: string;
  readonly password: string;
  readonly refreshToken?: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AdminModel extends EntityModel<AdminProps> {}
