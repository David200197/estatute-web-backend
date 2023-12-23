import { isString } from 'class-validator';

export class ScientificCategory {
  private constructor(public readonly value: string) {}

  public static checkIsScientificCategory(value: string): void {
    if (!isString(value))
      throw new TypeError('scientificCategory is not string');
  }

  public static create(value: string): ScientificCategory {
    this.checkIsScientificCategory(value);
    return new ScientificCategory(value);
  }
}
