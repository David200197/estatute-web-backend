import { FindOneInvitationHandlerModel } from './find-one-invitation-handler.model';
import { FindOneInvitationHandler } from './find-one-invitation.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  FIND_ONE_INVITATION_HANDLER_TOKEN,
  FindOneInvitationHandlerProvider,
] = createClassProvider<FindOneInvitationHandlerModel>(
  FindOneInvitationHandler,
);
