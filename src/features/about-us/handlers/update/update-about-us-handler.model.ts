import { UpdateAboutUsCommand } from './update-about-us.command';
import { AboutUsModel } from '../../models/about-us.model';
export interface UpdateAboutUsHandlerModel {
  execute(command: UpdateAboutUsCommand): Promise<AboutUsModel>;
}
