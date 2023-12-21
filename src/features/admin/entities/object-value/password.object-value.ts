import { isString } from 'class-validator';

export class PasswordObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value)) throw new TypeError('password is not string');
  }
}