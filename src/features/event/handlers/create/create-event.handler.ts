import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEventCommand } from './create-event.command';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { CreateEventHandlerModel } from './create-event-handler.model';
import { Inject } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';

@CommandHandler(CreateEventCommand)
export class CreateEventHandler
  implements CreateEventHandlerModel, ICommandHandler<CreateEventCommand>
{
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
  ) {}

  execute({ createEventDto }: CreateEventCommand): Promise<EventModel> {
    return this.eventRepository.create(createEventDto);
  }
}
