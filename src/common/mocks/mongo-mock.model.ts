import { CrudMockMethods } from '@src/common/mocks/crud-mock.methods';
import { HelperMockMethods } from '@src/common/interfaces/helper-mock.methods';

export interface MongoMockOptions<T> {
  exec: () => Promise<T>;
}

export class MongoMockModel<T> implements HelperMockMethods<T> {
  private crudMethods: CrudMockMethods<T>;

  constructor() {
    this.crudMethods = new CrudMockMethods();
  }

  __getStore(): T[] {
    return this.crudMethods.__getStore();
  }

  __isError(): boolean {
    return this.crudMethods.__isError();
  }

  __changeStore(store: T[]): void {
    this.crudMethods.__changeStore(store);
  }

  __reset(): void {
    this.crudMethods.__reset();
  }

  __setIsError(value: boolean): void {
    this.__setIsError(value);
  }

  create(authModel: T): Promise<T & { populate: () => Promise<T> }> {
    if (this.crudMethods.__isError()) throw new Error('Base Error');
    const authUser = this.crudMethods.create(authModel);
    return Promise.resolve({
      ...authUser,
      populate: () => Promise.resolve(authModel),
    });
  }

  findOne(filter: Partial<T>): MongoMockOptions<T> {
    if (this.crudMethods.__isError()) throw new Error('Base Error');
    const authUser = this.crudMethods.findOne(filter);
    return {
      exec: () => Promise.resolve(authUser),
    };
  }

  findOneAndUpdate(filter: Partial<T>, dto: Partial<T>): MongoMockOptions<T> {
    if (this.crudMethods.__isError()) throw new Error('Base Error');
    const authUser = this.crudMethods.update(filter, dto);
    return {
      exec: () => Promise.resolve(authUser),
    };
  }
}
