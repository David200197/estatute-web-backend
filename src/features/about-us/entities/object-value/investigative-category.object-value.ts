import { InvestigativeCategory } from '../../models/about-us.model';

export class InvestigativeCategoryObjectValue {
  constructor(public readonly value: InvestigativeCategory) {
    this.validateType();
  }

  private validateType() {
    if (
      this.value !== InvestigativeCategory.attache &&
      this.value !== InvestigativeCategory.auxiliary &&
      this.value !== InvestigativeCategory.headline
    )
      throw new TypeError('investigativeCategory is not string');
  }
}
