import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateAboutUsDto } from '../../dto/update-about-us.dto';
import { AboutUsModel } from '../../models/about-us.model';

export class UpdateAboutUsCommand {
  constructor(
    public readonly filter: DeepPartial<AboutUsModel>,
    public readonly updateAboutUsDto: UpdateAboutUsDto,
  ) {}
}
