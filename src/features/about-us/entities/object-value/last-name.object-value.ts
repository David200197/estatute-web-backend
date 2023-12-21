import { isString } from 'class-validator';

export class LastNameObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value)) throw new TypeError('lastName is not string');
  }
}
