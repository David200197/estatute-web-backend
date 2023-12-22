import { isString } from 'class-validator';

export class ScientificCategoryValueObject {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value))
      throw new TypeError('scientificCategory is not string');
  }
}
