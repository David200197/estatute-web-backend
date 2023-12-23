import { isString } from 'class-validator';

export class Username {
  private constructor(public readonly value: string) {}

  public static checkIsUsername(value: string): void {
    if (!isString(value)) throw new TypeError('username is not string');
  }

  public static create(value: string): Username {
    this.checkIsUsername(value);
    return new Username(value);
  }
}
