import { isNumber } from 'class-validator';

export class YearsOfWorkExperience {
  private constructor(public readonly value: number) {}

  public static checkIsYearsOfWorkExperience(value: number): void {
    if (!isNumber(value))
      throw new TypeError('yearsOfWorkExperience is not string');
  }

  public static create(value: number): YearsOfWorkExperience {
    this.checkIsYearsOfWorkExperience(value);
    return new YearsOfWorkExperience(value);
  }
}
