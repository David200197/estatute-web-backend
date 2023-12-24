import { createProvider } from '@src/common/utils/create-provider';
import { InvitationRepositoryModel } from '../models/invitation-repository.model';
import { InvitationMikroRepository } from '../repositories/invitation-mikro.repository';

export const [INVITATION_REPOSITORY_TOKEN, InvitationRepositoryProvider] =
  createProvider<InvitationRepositoryModel>(InvitationMikroRepository);
