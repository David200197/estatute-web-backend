import { FindAllInvitationHandlerModel } from './find-all-invitation-handler.model';
import { FindAllInvitationHandler } from './find-all-invitation.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  FIND_ALL_INVITATION_HANDLER_TOKEN,
  FindAllInvitationHandlerProvider,
] = createProvider<FindAllInvitationHandlerModel>(
  FindAllInvitationHandler,
);
