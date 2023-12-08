import { UpdateInvitationHandlerModel } from './update-invitation-handler.model';
import { UpdateInvitationHandler } from './update-invitation.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  UPDATE_INVITATION_HANDLER_TOKEN,
  UpdateInvitationHandlerProvider,
] = createProvider<UpdateInvitationHandlerModel>(UpdateInvitationHandler);
