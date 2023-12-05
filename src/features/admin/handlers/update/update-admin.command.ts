import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateAdminDto } from '../../dto/update-admin.dto';
import { AdminModel } from '../../models/admin.model';

export class UpdateAdminCommand {
  constructor(
    public readonly filter: DeepPartial<AdminModel>,
    public readonly updateAdminDto: UpdateAdminDto,
  ) {}
}
