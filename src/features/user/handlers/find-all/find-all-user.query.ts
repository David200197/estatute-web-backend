import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UserModel } from '../../models/user.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllUserQuery {
  constructor(
    public readonly filter: DeepPartial<UserModel>,
    public readonly options: FindAllDto,
  ) {}
}
