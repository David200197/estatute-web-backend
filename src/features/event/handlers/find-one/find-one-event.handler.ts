import { QueryHandler } from '@nestjs/cqrs';
import { FindOneEventQuery } from './find-one-event.query';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { FindOneEventHandlerModel } from './find-one-event-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';
import { EventNotFoundException } from '../../exceptions/event-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@QueryHandler(FindOneEventQuery)
export class FindOneEventHandler implements FindOneEventHandlerModel {
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneEventQuery): Promise<Either<HttpException, EventModel>> {
    const event = await this.eventRepository.findOne(filter);
    if (!event) return Either.left(new EventNotFoundException());
    return Either.right(event);
  }
}
