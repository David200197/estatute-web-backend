import { RemoveAboutUsCommand } from './remove-about-us.command';
import { AboutUsModel } from '../../models/about-us.model';
export interface RemoveAboutUsHandlerModel {
  execute(command: RemoveAboutUsCommand): Promise<AboutUsModel>;
}
