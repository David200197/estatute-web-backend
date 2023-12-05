import { CreateStatuteCommand } from './create-statute.command';
import { StatuteModel } from '../../models/statute.model';
export interface CreateStatuteHandlerModel {
  execute(command: CreateStatuteCommand): Promise<StatuteModel>;
}
