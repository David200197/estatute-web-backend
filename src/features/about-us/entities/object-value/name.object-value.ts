import { isString } from 'class-validator';

export class NameObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value)) throw new TypeError('name is not string');
  }
}
