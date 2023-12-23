import { isString } from 'class-validator';

export class Password {
  private constructor(public readonly value: string) {}

  public static checkIsPassword(value: string): void {
    if (!isString(value)) throw new TypeError('password is not string');
  }

  public static create(value: string): Password {
    this.checkIsPassword(value);
    return new Password(value);
  }
}
