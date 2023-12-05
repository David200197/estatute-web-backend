import { UpdateInvitationHandlerModel } from './update-invitation-handler.model';
import { UpdateInvitationHandler } from './update-invitation.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  UPDATE_INVITATION_HANDLER_TOKEN,
  UpdateInvitationHandlerProvider,
] = createClassProvider<UpdateInvitationHandlerModel>(UpdateInvitationHandler);
