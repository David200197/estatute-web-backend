import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AboutUsProps } from '../../models/about-us.model';

export class FindOneAboutUsQuery {
  constructor(public readonly filter: DeepPartial<AboutUsProps>) {}
}
