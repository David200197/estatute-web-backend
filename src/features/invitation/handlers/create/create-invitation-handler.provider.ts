import { CreateInvitationHandlerModel } from './create-invitation-handler.model';
import { CreateInvitationHandler } from './create-invitation.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  CREATE_INVITATION_HANDLER_TOKEN,
  CreateInvitationHandlerProvider,
] = createClassProvider<CreateInvitationHandlerModel>(CreateInvitationHandler);
