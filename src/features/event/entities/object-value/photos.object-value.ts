import { isString } from 'class-validator';

export class PhotosObjectValue {
  constructor(public readonly value: string[] = []) {
    this.validateType();
  }

  private validateType() {
    if (!Array.isArray(this.value))
      throw new TypeError('sponsors is not array');
    if (!this.value.every((data) => isString(data)))
      throw new TypeError('sponsors is not array string');
  }
}
