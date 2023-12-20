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

class EntityA extends Entity {
  _string?: string;
  _number?: number;
  _boolean?: boolean;
  _date?: Date;
  _null?: null;
  _undefined?: undefined;
  _object?: { sample: string };
  _entity?: EntityB;
  _entities?: EntitiesB;
  _array_string?: string[];
  _array_number?: number[];
  _array_boolean?: boolean[];
  _array_date?: Date[];
  _array_null?: null[];
  _array_undefined?: undefined[];
  _array_object?: { sample: string }[];
  _array_entity?: EntityB[];

  constructor(options: NonFunctionProperties<EntityA>) {
    super();
    this._string = options._string;
    this._number = options._number;
    this._boolean = options._boolean;
    this._date = options._date;
    this._null = null;
    this._undefined = undefined;
    this._object = options._object;
    this._entity = options._entity;
    this._entities = options._entities;
    this._array_string = options._array_string;
    this._array_number = options._array_number;
    this._array_boolean = options._array_boolean;
    this._array_date = options._array_date;
    this._array_null = options._array_null;
    this._array_undefined = options._array_undefined;
    this._array_object = options._array_object;
    this._array_entity = options._array_entity;
  }
}

describe('Entity', () => {
  describe('isEqual', () => {
    it('Should be return true', () => {
      const entity1 = new EntityA({
        _string: 'aaa',
        _number: 111,
        _boolean: true,
        _date: new Date('10-10-2020'),
        _entity: new EntityB({ sample: 'aaa' }),
        _object: { sample: 'aaa' },
        _entities: new EntitiesB([new EntityB({ sample: 'aaa' })]),
        _array_boolean: [true],
        _array_date: [new Date('10-10-2020')],
        _array_entity: [new EntityB({ sample: 'aaa' })],
        _array_null: [null],
        _array_number: [111],
        _array_object: [{ sample: 'aaa' }],
        _array_string: ['aaa'],
        _array_undefined: [undefined],
      });
      const entity2 = new EntityA({
        _string: 'aaa',
        _number: 111,
        _boolean: true,
        _date: new Date('10-10-2020'),
        _entity: new EntityB({ sample: 'aaa' }),
        _object: { sample: 'aaa' },
        _entities: new EntitiesB([new EntityB({ sample: 'aaa' })]),
        _array_boolean: [true],
        _array_date: [new Date('10-10-2020')],
        _array_entity: [new EntityB({ sample: 'aaa' })],
        _array_null: [null],
        _array_number: [111],
        _array_object: [{ sample: 'aaa' }],
        _array_string: ['aaa'],
        _array_undefined: [undefined],
      });
      const isValid = entity1.isEqual(entity2);
      expect(isValid).toEqual(true);
    });
  });
});
