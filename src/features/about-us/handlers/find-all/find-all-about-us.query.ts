import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AboutUsModel } from '../../models/about-us.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllAboutUsQuery {
  constructor(
    public readonly filter: DeepPartial<AboutUsModel>,
    public readonly options: FindAllDto,
  ) {}
}
