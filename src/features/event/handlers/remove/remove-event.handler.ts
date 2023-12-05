import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveEventCommand } from './remove-event.command';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { RemoveEventHandlerModel } from './remove-event-handler.model';
import { Inject } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';

@CommandHandler(RemoveEventCommand)
export class RemoveEventHandler
  implements RemoveEventHandlerModel, ICommandHandler<RemoveEventCommand>
{
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
  ) {}

  execute({ filter }: RemoveEventCommand): Promise<EventModel> {
    return this.eventRepository.removeOne(filter);
  }
}
