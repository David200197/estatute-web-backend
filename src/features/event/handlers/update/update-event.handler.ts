import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateEventCommand } from './update-event.command';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { UpdateEventHandlerModel } from './update-event-handler.model';
import { Inject } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';

@CommandHandler(UpdateEventCommand)
export class UpdateEventHandler
  implements UpdateEventHandlerModel, ICommandHandler<UpdateEventCommand>
{
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
  ) {}

  async execute({
    filter,
    updateEventDto,
  }: UpdateEventCommand): Promise<EventModel> {
    return this.eventRepository.updateOne(filter, updateEventDto);
  }
}
