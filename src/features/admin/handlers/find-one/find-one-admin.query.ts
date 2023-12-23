import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AdminProps } from '../../models/admin.model';

export class FindOneAdminQuery {
  constructor(public readonly filter: DeepPartial<AdminProps>) {}
}
