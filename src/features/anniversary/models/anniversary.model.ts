import { EntityModel } from '@src/common/abstracts/entity.abstract';

export type AnniversaryProps = {
  readonly uuid: string;
  readonly date: Date;
  readonly description: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AnniversaryModel extends EntityModel<AnniversaryProps> {}
