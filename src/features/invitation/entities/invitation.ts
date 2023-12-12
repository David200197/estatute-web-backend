import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  InvitationModel,
  InvitationProperties,
} from '../models/invitation.model';

export class Invitation extends Entity implements InvitationModel {
  constructor(options: InvitationProperties) {
    super();
    Object.assign(this, options);
  }
}
