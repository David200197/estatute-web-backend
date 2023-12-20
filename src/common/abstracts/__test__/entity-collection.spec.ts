import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';
import { EntityCollection } from '../entity-collection.abstracts';
import { Entity } from '../entity.abstract';

class EntitiesB extends EntityCollection<EntityB> {
  constructor(public readonly value: EntityB[]) {
    super(value);
  }
}

class EntityB extends Entity {
  sample: string;
  constructor(options: NonFunctionProperties<EntityB>) {
    super();
    this.sample = options.sample;
  }
}

describe('Entity Collections', () => {
  describe('isEqual', () => {
    it('Should be return true', () => {
      const entities1 = new EntitiesB([new EntityB({ sample: 'aaa' })]);
      const entities2 = new EntitiesB([new EntityB({ sample: 'aaa' })]);
      const isValid = entities1.isEqual(entities2);
      expect(isValid).toEqual(true);
    });
  });
});
