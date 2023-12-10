import { CommandHandler } from '@nestjs/cqrs';
import { UpdateEventCommand } from './update-event.command';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { UpdateEventHandlerModel } from './update-event-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';
import { EventNotFoundException } from '../../exceptions/event-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(UpdateEventCommand)
export class UpdateEventHandler implements UpdateEventHandlerModel {
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
  ) {}

  async execute({
    filter,
    updateEventDto,
  }: UpdateEventCommand): Promise<Either<HttpException, EventModel>> {
    const event = await this.eventRepository.updateOne(filter, updateEventDto);
    if (!event) return Either.left(new EventNotFoundException());
    return Either.right(event);
  }
}
