import { EntityModel } from '@src/common/abstracts/entity.abstract';
import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface EventModel extends EntityModel {
  readonly uuid: string;
  readonly name: string;
  readonly date: string;
  readonly campus: string;
  readonly sponsors: string;
  readonly rapporteurship: string;
  readonly photos: string[];
}

type EventPropertiesWithoutPhotos = Omit<
  NonFunctionProperties<EventModel>,
  'photos' | 'uuid'
>;
export type EventProperties = EventPropertiesWithoutPhotos & {
  photos?: string[];
  uuid?: string;
};
