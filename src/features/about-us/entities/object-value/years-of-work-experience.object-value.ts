import { isNumber } from 'class-validator';

export class YearsOfWorkExperienceObjectValue {
  constructor(public readonly value: number) {
    this.validateType();
  }

  private validateType() {
    if (!isNumber(this.value))
      throw new TypeError('yearsOfWorkExperience is not string');
  }
}
