import { CreateAboutUsCommand } from './create-about-us.command';
import { AboutUsModel } from '../../models/about-us.model';
export interface CreateAboutUsHandlerModel {
  execute(command: CreateAboutUsCommand): Promise<AboutUsModel>;
}
