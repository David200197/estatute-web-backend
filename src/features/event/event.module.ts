import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventRepositoryProvider } from './providers/event-repository.provider';
import { EventController } from './event.controller';
import { EventCron } from './event.cron';
import { EventListener } from './event.listener';
import { FindAllEventHandlerProvider } from './handlers/find-all/find-all-event-handler.provider';
import { CreateEventHandlerProvider } from './handlers/create/create-event-handler.provider';
import { FindOneEventHandlerProvider } from './handlers/find-one/find-one-event-handler.provider';
import { UpdateEventHandlerProvider } from './handlers/update/update-event-handler.provider';
import { RemoveEventHandlerProvider } from './handlers/remove/remove-event-handler.provider';

@Module({
  imports: [CqrsModule],
  controllers: [EventController],
  providers: [
    EventRepositoryProvider,
    FindAllEventHandlerProvider,
    CreateEventHandlerProvider,
    FindOneEventHandlerProvider,
    UpdateEventHandlerProvider,
    RemoveEventHandlerProvider,
    EventListener,
    EventCron,
  ],
})
export class EventModule {}
