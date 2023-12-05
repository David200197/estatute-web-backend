import { AnniversaryModel } from '../models/anniversary.model';
import { AnniversarysModel } from '../models/anniversarys.model';

export class Anniversarys implements AnniversarysModel {
  constructor(public readonly value: AnniversaryModel[]) {}
}
