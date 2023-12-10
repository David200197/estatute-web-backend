import { FindOneInvitationHandlerModel } from './find-one-invitation-handler.model';
import { FindOneInvitationHandler } from './find-one-invitation.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  FIND_ONE_INVITATION_HANDLER_TOKEN,
  FindOneInvitationHandlerProvider,
] = createProvider<FindOneInvitationHandlerModel>(FindOneInvitationHandler);
