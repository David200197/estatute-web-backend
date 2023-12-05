import { CreateAboutUsDto } from '../../dto/create-about-us.dto';

export class CreateAboutUsCommand {
  constructor(public readonly createAboutUsDto: CreateAboutUsDto) {}
}
