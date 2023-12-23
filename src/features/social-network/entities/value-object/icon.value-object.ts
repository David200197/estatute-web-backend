import { isURL } from 'class-validator';

export class Icon {
  private constructor(public readonly value: string) {}

  public static checkIsIcon(value: string): void {
    if (!isURL(value)) throw new TypeError('icon is not url');
  }

  public static create(value: string): Icon {
    this.checkIsIcon(value);
    return new Icon(value);
  }
}
