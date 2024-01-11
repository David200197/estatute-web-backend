import { EntityModel } from '@src/common/abstracts/entity.abstract';

export enum TypeEventEnum {
  virual = 'virtual',
  inPresent = 'presencial',
  hybrid = 'híbrido',
}

export type InvitationProps = {
  readonly uuid: string;
  readonly name: string;
  readonly sponsors: string[];
  readonly location: string;
  readonly type: TypeEventEnum;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InvitationModel extends EntityModel<InvitationProps> {}
