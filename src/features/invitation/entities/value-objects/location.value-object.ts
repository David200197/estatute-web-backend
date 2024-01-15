import { isString } from 'class-validator';

export class Location {
  private constructor(public readonly value: string) {}

  public static checkIsLocation(value: string): void {
    if (!isString(value)) throw new TypeError('location is not string');
  }

  public static create(value: string): Location {
    this.checkIsLocation(value);
    return new Location(value);
  }
}
