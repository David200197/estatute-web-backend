import { isString } from 'class-validator';

export class SponsorsObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value)) throw new TypeError('sponsors is not string');
  }
}
