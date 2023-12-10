import { CommandHandler } from '@nestjs/cqrs';
import { RemoveEventCommand } from './remove-event.command';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { RemoveEventHandlerModel } from './remove-event-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';
import { EventNotFoundException } from '../../exceptions/event-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(RemoveEventCommand)
export class RemoveEventHandler implements RemoveEventHandlerModel {
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
  ) {}

  async execute({
    filter,
  }: RemoveEventCommand): Promise<Either<HttpException, EventModel>> {
    const event = await this.eventRepository.removeOne(filter);
    if (!event) return Either.left(new EventNotFoundException());
    return Either.right(event);
  }
}
