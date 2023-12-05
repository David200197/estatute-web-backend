import { CreateAnniversaryCommand } from './create-anniversary.command';
import { AnniversaryModel } from '../../models/anniversary.model';
export interface CreateAnniversaryHandlerModel {
  execute(command: CreateAnniversaryCommand): Promise<AnniversaryModel>;
}
