import { EntityModel } from '@src/common/abstracts/entity.abstract';

export type SocialNetworkProps = {
  readonly uuid: string;
  readonly name: string;
  readonly link: string;
  readonly icon: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SocialNetworkModel extends EntityModel<SocialNetworkProps> {}
