import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AdminModel } from '../../models/admin.model';

export class RemoveAdminCommand {
  constructor(public readonly filter: DeepPartial<AdminModel>) {}
}
