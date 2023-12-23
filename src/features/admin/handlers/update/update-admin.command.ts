import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateAdminDto } from '../../dto/update-admin.dto';
import { AdminProps } from '../../models/admin.model';

export class UpdateAdminCommand {
  constructor(
    public readonly filter: DeepPartial<AdminProps>,
    public readonly updateAdminDto: UpdateAdminDto,
  ) {}
}
