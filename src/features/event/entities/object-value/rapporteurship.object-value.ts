import { isString } from 'class-validator';

export class RapporteurshipObjectValue {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value))
      throw new TypeError('rapporteurship is not string');
  }
}
