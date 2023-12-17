import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { StatuteRepositoryProvider } from './providers/statute-repository.provider';
import { StatuteController } from './statute.controller';
import { StatuteCron } from './statute.cron';
import { StatuteListener } from './statute.listener';
import { FindAllStatuteHandlerProvider } from './handlers/find-all/find-all-statute-handler.provider';
import { CreateStatuteHandlerProvider } from './handlers/create/create-statute-handler.provider';
import { FindOneStatuteHandlerProvider } from './handlers/find-one/find-one-statute-handler.provider';
import { UpdateStatuteHandlerProvider } from './handlers/update/update-statute-handler.provider';
import { RemoveStatuteHandlerProvider } from './handlers/remove/remove-statute-handler.provider';
import { StatuteCli } from './statute.cli';

@Module({
  imports: [CqrsModule],
  controllers: [StatuteController],
  providers: [
    StatuteRepositoryProvider,
    FindAllStatuteHandlerProvider,
    CreateStatuteHandlerProvider,
    FindOneStatuteHandlerProvider,
    UpdateStatuteHandlerProvider,
    RemoveStatuteHandlerProvider,
    StatuteListener,
    StatuteCron,
    StatuteCli,
  ],
})
export class StatuteModule {}
