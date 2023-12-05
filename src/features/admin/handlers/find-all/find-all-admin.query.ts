import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AdminModel } from '../../models/admin.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllAdminQuery {
  constructor(
    public readonly filter: DeepPartial<AdminModel>,
    public readonly options: FindAllDto,
  ) {}
}
