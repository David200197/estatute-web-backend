import { isString } from 'class-validator';

export class Rapporteurship {
  constructor(public readonly value: string) {}

  public static checkIsRapporteurship(value: string): void {
    if (!isString(value)) throw new TypeError('rapporteurship is not string');
  }

  public static create(value: string): Rapporteurship {
    this.checkIsRapporteurship(value);
    return Rapporteurship.create(value);
  }
}
