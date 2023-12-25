import { OptionsFlags } from '../interfaces/options-flags';
import { ValueObject } from '../interfaces/value-object';
import { ValueObjectsToProps } from '../interfaces/value-objects-to-props';
import { isDeeplyEqual } from '../utils/is-deeply-equal';
import { EntityModel } from './entity.abstract';

export interface EntitiesModel<A extends EntityModel<Record<string, unknown>>>
  extends ValueObject<A[]> {
  readonly value: A[];
  groupBy(getKey: (event: A) => number | string): Record<number | string, A[]>;
  isEmpty(): boolean;
  isNotEmpty(): boolean;
  map<T>(method: (value: A, index: number, array: A[]) => T): T[];
  mapAsync<T>(
    method: (value: A, index: number, array: A[]) => Promise<T>,
  ): Promise<T[]>;
  mapParallel<T>(
    method: (value: A, index: number, array: A[]) => T,
  ): Promise<PromiseSettledResult<Awaited<T>>[]>;
  forEach(method: (value: A, index: number, array: A[]) => void): void;
  forEachAsync(
    method: (value: A, index: number, array: A[]) => Promise<void>,
  ): Promise<void>;
  forEachParallel(
    method: (value: A, index: number, array: A[]) => void,
  ): Promise<PromiseSettledResult<void>[]>;
  clone(): EntitiesModel<A>;
  select(options: Partial<OptionsFlags<A['value']>>): Record<string, unknown>[];
  ignore(options: Partial<OptionsFlags<A['value']>>): Record<string, unknown>[];
  isEqual(entities: EntitiesModel<A>): boolean;
  add(entities: EntitiesModel<A>): EntitiesModel<A>;
  toObject(): ValueObjectsToProps<A['value']>[];
}

export class Entities<A extends EntityModel<Record<string, unknown>>>
  implements EntitiesModel<A>
{
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
          ? new Entities([...accumulator[key].value, currentValue])
          : new Entities([currentValue]),
      };
    }, {});
  };

  isEmpty(): boolean {
    return !Boolean(this.value.length);
  }

  isNotEmpty(): boolean {
    return Boolean(this.value.length);
  }

  map<T>(method: (value: A, index: number, array: A[]) => T): T[] {
    return this.value.map(method);
  }

  async mapAsync<T>(
    method: (value: A, index: number, array: A[]) => Promise<T>,
  ): Promise<T[]> {
    const newArray: T[] = [];
    const entries = this.value.entries();
    for (const [index, data] of entries) {
      const mutateData = await method(data.clone(), index, this.value);
      newArray[index] = mutateData;
    }
    return newArray;
  }

  async mapParallel<T>(
    method: (value: A, index: number, array: A[]) => T,
  ): Promise<PromiseSettledResult<Awaited<T>>[]> {
    return await Promise.allSettled(this.value.map(method));
  }

  forEach(method: (value: A, index: number, array: A[]) => void): void {
    return this.value.forEach(method);
  }

  async forEachAsync(
    method: (value: A, index: number, array: A[]) => Promise<void>,
  ): Promise<void> {
    const entries = this.value.entries();
    for (const [index, data] of entries) {
      await method(data.clone(), index, this.value);
    }
  }

  async forEachParallel(
    method: (value: A, index: number, array: A[]) => void,
  ): Promise<PromiseSettledResult<void>[]> {
    return await Promise.allSettled(this.value.map(method));
  }

  clone() {
    return new Entities([...this.value.map((data) => data.clone())]);
  }

  select(
    options: Partial<OptionsFlags<A['value']>>,
  ): Record<string, unknown>[] {
    return this.value.map((data) => data.select(options));
  }

  ignore(
    options: Partial<OptionsFlags<A['value']>>,
  ): Record<string, unknown>[] {
    return this.value.map((data) => data.ignore(options));
  }

  isEqual(entities: EntitiesModel<A>): boolean {
    return isDeeplyEqual(this.value, entities.value);
  }

  add(entities: EntitiesModel<A>): EntitiesModel<A> {
    return new Entities([...this.value, ...entities.value]);
  }

  toObject(): ValueObjectsToProps<A['value']>[] {
    return this.value.map((data) => data.toObject()) as ValueObjectsToProps<
      A['value']
    >[];
  }
}
