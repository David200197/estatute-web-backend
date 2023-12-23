import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AboutUsProps } from '../../models/about-us.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllAboutUsQuery {
  constructor(
    public readonly filter: DeepPartial<AboutUsProps>,
    public readonly options: FindAllDto,
  ) {}
}
