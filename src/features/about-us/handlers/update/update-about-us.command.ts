import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateAboutUsDto } from '../../dto/update-about-us.dto';
import { AboutUsProps } from '../../models/about-us.model';

export class UpdateAboutUsCommand {
  constructor(
    public readonly filter: DeepPartial<AboutUsProps>,
    public readonly updateAboutUsDto: UpdateAboutUsDto,
  ) {}
}
