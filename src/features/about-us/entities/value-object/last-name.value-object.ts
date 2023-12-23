import { isString } from 'class-validator';

export class LastName {
  private constructor(public readonly value: string) {}

  public static checkIsLastName(value: string): void {
    if (!isString(value)) throw new TypeError('lastName is not string');
  }

  public static create(value: string): LastName {
    this.checkIsLastName(value);
    return new LastName(value);
  }
}
