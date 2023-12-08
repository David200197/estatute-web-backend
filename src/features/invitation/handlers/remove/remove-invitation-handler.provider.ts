import { RemoveInvitationHandlerModel } from './remove-invitation-handler.model';
import { RemoveInvitationHandler } from './remove-invitation.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  REMOVE_INVITATION_HANDLER_TOKEN,
  RemoveInvitationHandlerProvider,
] = createProvider<RemoveInvitationHandlerModel>(RemoveInvitationHandler);
