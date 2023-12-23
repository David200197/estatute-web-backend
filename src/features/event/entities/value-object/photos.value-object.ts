import { isString } from 'class-validator';

export class Photos {
  constructor(public readonly value: string[] = []) {}

  public static checkIsPhotos(value: string[]): void {
    if (!Array.isArray(value)) throw new TypeError('sponsors is not array');
    if (!value.every((data) => isString(data)))
      throw new TypeError('sponsors is not array string');
  }

  public static create(value: string[]): Photos {
    this.checkIsPhotos(value);
    return new Photos(value);
  }
}
