import { FindAllInvitationHandlerModel } from './find-all-invitation-handler.model';
import { FindAllInvitationHandler } from './find-all-invitation.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  FIND_ALL_INVITATION_HANDLER_TOKEN,
  FindAllInvitationHandlerProvider,
] = createClassProvider<FindAllInvitationHandlerModel>(
  FindAllInvitationHandler,
);
