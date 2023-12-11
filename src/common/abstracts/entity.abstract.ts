import { NonFunctionProperties } from '../interfaces/manipulate-properties';

export class Entity<A> {
  protected constructor(private readonly value: NonFunctionProperties<A>) {}

  getProperties(): string[] {
    return Object.keys(this.value);
  }

  map<T>(mutate: (value: NonFunctionProperties<A>) => T): T {
    return mutate(this.value);
  }
}
