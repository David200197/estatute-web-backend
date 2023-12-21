import { isString } from 'class-validator';

export class DateObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value)) throw new TypeError('date is not string');
  }
}
