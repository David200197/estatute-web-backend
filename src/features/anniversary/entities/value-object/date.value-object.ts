import { isDateString } from 'class-validator';

export class DateValue {
  private constructor(public readonly value: string) {}

  public static validateIsDate(value: string): void {
    if (!isDateString(value)) throw new TypeError('date is not a Date type');
  }

  public static create(value: string): DateValue {
    this.validateIsDate(value);
    return new DateValue(value);
  }
}
