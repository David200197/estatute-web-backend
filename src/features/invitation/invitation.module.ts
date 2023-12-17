import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { InvitationRepositoryProvider } from './providers/invitation-repository.provider';
import { InvitationController } from './invitation.controller';
import { InvitationCron } from './invitation.cron';
import { InvitationListener } from './invitation.listener';
import { FindAllInvitationHandlerProvider } from './handlers/find-all/find-all-invitation-handler.provider';
import { CreateInvitationHandlerProvider } from './handlers/create/create-invitation-handler.provider';
import { FindOneInvitationHandlerProvider } from './handlers/find-one/find-one-invitation-handler.provider';
import { UpdateInvitationHandlerProvider } from './handlers/update/update-invitation-handler.provider';
import { RemoveInvitationHandlerProvider } from './handlers/remove/remove-invitation-handler.provider';
import { InvitationCli } from './invitation.cli';

@Module({
  imports: [CqrsModule],
  controllers: [InvitationController],
  providers: [
    InvitationRepositoryProvider,
    FindAllInvitationHandlerProvider,
    CreateInvitationHandlerProvider,
    FindOneInvitationHandlerProvider,
    UpdateInvitationHandlerProvider,
    RemoveInvitationHandlerProvider,
    InvitationListener,
    InvitationCron,
    InvitationCli,
  ],
})
export class InvitationModule {}
