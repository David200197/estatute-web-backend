import { UpdateAnniversaryCommand } from './update-anniversary.command';
import { AnniversaryModel } from '../../models/anniversary.model';
export interface UpdateAnniversaryHandlerModel {
  execute(command: UpdateAnniversaryCommand): Promise<AnniversaryModel>;
}
