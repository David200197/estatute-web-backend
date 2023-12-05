import { RemoveStatuteCommand } from './remove-statute.command';
import { StatuteModel } from '../../models/statute.model';
export interface RemoveStatuteHandlerModel {
  execute(command: RemoveStatuteCommand): Promise<StatuteModel>;
}
