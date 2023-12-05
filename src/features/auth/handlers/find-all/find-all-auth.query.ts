import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AuthModel } from '../../models/auth.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllAuthQuery {
  constructor(
    public readonly filter: DeepPartial<AuthModel>,
    public readonly options: FindAllDto,
  ) {}
}
