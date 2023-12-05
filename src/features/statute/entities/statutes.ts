import { StatuteModel } from '../models/statute.model';
import { StatutesModel } from '../models/statutes.model';

export class Statutes implements StatutesModel {
  constructor(public readonly value: StatuteModel[]) {}
}
