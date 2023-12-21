import { isURL } from 'class-validator';

export class LinkObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isURL(this.value)) throw new TypeError('link is not url');
  }
}
