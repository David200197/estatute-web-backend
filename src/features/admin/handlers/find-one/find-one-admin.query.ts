import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AdminModel } from '../../models/admin.model';

export class FindOneAdminQuery {
  constructor(public readonly filter: DeepPartial<AdminModel>) {}
}
