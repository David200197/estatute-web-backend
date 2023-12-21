import { SpecialtyDegree } from '../../models/about-us.model';

export class SpecialtyDegreeObjectValue {
  constructor(public readonly value: SpecialtyDegree) {
    this.validateType();
  }

  private validateType() {
    if (
      this.value !== SpecialtyDegree.firstDegree &&
      this.value !== SpecialtyDegree.secondDegree
    )
      throw new TypeError('specialtyDegree is not string');
  }
}
