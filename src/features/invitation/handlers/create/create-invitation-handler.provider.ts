import { CreateInvitationHandlerModel } from './create-invitation-handler.model';
import { CreateInvitationHandler } from './create-invitation.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  CREATE_INVITATION_HANDLER_TOKEN,
  CreateInvitationHandlerProvider,
] = createProvider<CreateInvitationHandlerModel>(CreateInvitationHandler);
