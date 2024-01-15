import { isString } from 'class-validator';

export class Sponsors {
  private constructor(public readonly value: string[]) {}

  public static checkIsSponsors(value: string[]): void {
    if (!Array.isArray(value))
      throw new TypeError('sponsors is not array string');
    if (!value.every((data) => isString(data)))
      throw new TypeError('sponsors is not array string');
  }

  public static create(value: string[]): Sponsors {
    this.checkIsSponsors(value);
    return new Sponsors(value);
  }
}
