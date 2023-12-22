import { isString } from 'class-validator';

export class CampusValueObject {
  constructor(public readonly value: string) {
    this.validateType();
  }

  private validateType() {
    if (!isString(this.value)) throw new TypeError('campus is not string');
  }
}
