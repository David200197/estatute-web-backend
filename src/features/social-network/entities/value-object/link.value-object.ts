import { isURL } from 'class-validator';

export class LinkValueObject {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isURL(this.value)) throw new TypeError('link is not url');
  }
}
