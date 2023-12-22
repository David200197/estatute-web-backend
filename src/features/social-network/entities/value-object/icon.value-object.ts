import { isURL } from 'class-validator';

export class IconValueObject {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isURL(this.value)) throw new TypeError('icon is not url');
  }
}
