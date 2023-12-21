import { isURL } from 'class-validator';

export class IconObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isURL(this.value)) throw new TypeError('icon is not url');
  }
}
