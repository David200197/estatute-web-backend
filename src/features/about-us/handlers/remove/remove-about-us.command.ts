import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AboutUsProps } from '../../models/about-us.model';

export class RemoveAboutUsCommand {
  constructor(public readonly filter: DeepPartial<AboutUsProps>) {}
}
