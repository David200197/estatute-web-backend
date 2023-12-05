import { RemoveInvitationHandlerModel } from './remove-invitation-handler.model';
import { RemoveInvitationHandler } from './remove-invitation.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  REMOVE_INVITATION_HANDLER_TOKEN,
  RemoveInvitationHandlerProvider,
] = createClassProvider<RemoveInvitationHandlerModel>(RemoveInvitationHandler);
