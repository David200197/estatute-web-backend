import { isString } from 'class-validator';

export class SpecialtyObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value)) throw new TypeError('specialty is not string');
  }
}
