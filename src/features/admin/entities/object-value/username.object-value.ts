import { isString } from 'class-validator';

export class UsernameObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value)) throw new TypeError('username is not string');
  }
}