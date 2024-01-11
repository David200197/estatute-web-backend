import { isString } from 'class-validator';

export class Description {
  private constructor(public readonly value: string) {}

  public static checkIsDescription(value: string): void {
    if (!isString(value)) throw new TypeError('description is not string');
  }

  public static create(value: string): Description {
    this.checkIsDescription(value);
    return new Description(value);
  }
}
