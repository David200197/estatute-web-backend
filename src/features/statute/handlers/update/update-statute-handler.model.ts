import { UpdateStatuteCommand } from './update-statute.command';
import { StatuteModel } from '../../models/statute.model';
export interface UpdateStatuteHandlerModel {
  execute(command: UpdateStatuteCommand): Promise<StatuteModel>;
}
