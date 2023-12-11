export class EntityCollection<A> {
  protected constructor(readonly value: A[]) {}

  groupBy = (
    getKey: (event: A) => number | string,
  ): Record<number | string, A[]> => {
    return this.value.reduce((accumulator, currentValue) => {
      const key = getKey(currentValue);
      if (!key) return { ...accumulator };
      return {
        ...accumulator,
        [key]: accumulator[key]
          ? new EntityCollection([...accumulator[key].value, currentValue])
          : new EntityCollection([currentValue]),
      };
    }, {});
  };

  isEmpty(): boolean {
    return !Boolean(this.value.length);
  }

  isNotEmpty(): boolean {
    return Boolean(this.value.length);
  }

  *[Symbol.iterator]() {
    yield* this.value;
  }
}
