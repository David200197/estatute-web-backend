import { TeachingCategory } from '../../models/about-us.model';

export class TeachingCategoryValueObject {
  constructor(public readonly value: TeachingCategory) {
    this.validateType();
  }

  private validateType() {
    if (
      this.value !== TeachingCategory.assistant &&
      this.value !== TeachingCategory.auxiliary &&
      this.value !== TeachingCategory.headline
    )
      throw new TypeError('teachingCategory is not string');
  }
}
