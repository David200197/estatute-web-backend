import { createProvider } from '@src/common/utils/create-provider';
import { InvitationRepositoryModel } from '../models/invitation-repository.model';
import { InvitationLocalRepository } from '../repositories/invitation-local.repository';

export const [INVITATION_REPOSITORY_TOKEN, InvitationRepositoryProvider] =
  createProvider<InvitationRepositoryModel>(InvitationLocalRepository);
