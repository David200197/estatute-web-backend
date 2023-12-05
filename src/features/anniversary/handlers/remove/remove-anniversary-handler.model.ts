import { RemoveAnniversaryCommand } from './remove-anniversary.command';
import { AnniversaryModel } from '../../models/anniversary.model';
export interface RemoveAnniversaryHandlerModel {
  execute(command: RemoveAnniversaryCommand): Promise<AnniversaryModel>;
}
