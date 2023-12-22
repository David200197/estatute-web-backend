import { isString } from 'class-validator';

export class TeachingExperienceValueObject {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value))
      throw new TypeError('teachingExperience is not string');
  }
}
