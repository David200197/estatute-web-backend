import { isString } from 'class-validator';

export class ScientificCategoryObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value))
      throw new TypeError('scientificCategory is not string');
  }
}
