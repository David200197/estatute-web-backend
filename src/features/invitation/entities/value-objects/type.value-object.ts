import { TypeEventEnum } from '../../models/invitation.model';

export class Type {
  private constructor(public readonly value: TypeEventEnum) {}

  public static checkIsType(value: TypeEventEnum): void {
    if (
      value !== TypeEventEnum.hybrid &&
      value !== TypeEventEnum.inPresent &&
      value !== TypeEventEnum.virtual
    )
      throw new TypeError('type is not string');
  }

  public static create(value: TypeEventEnum): Type {
    this.checkIsType(value);
    return new Type(value);
  }
}
