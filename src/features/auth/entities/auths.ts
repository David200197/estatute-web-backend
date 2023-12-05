import { AuthModel } from '../models/auth.model';
import { AuthsModel } from '../models/auths.model';

export class Auths implements AuthsModel {
  constructor(public readonly value: AuthModel[]) {}
}
