import { Entities } from '@src/common/abstracts/entities.abstracts';
import { StatuteModel, StatuteProps } from '../models/statute.model';
import { StatutesModel } from '../models/statutes.model';
import { Statute } from './statute';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class Statutes extends Entities<StatuteModel> implements StatutesModel {
  private constructor(public readonly value: StatuteModel[]) {
    super(value);
  }

  static create(value: SelfPartial<StatuteProps, 'uuid'>[]) {
    if (!Array.isArray(value)) throw new TypeError('Statutes is not a array');
    return new Statutes(value.map((data) => Statute.create(data)));
  }
}
