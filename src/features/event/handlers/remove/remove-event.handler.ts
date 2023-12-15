import { CommandHandler } from '@nestjs/cqrs';
import { RemoveEventCommand } from './remove-event.command';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { RemoveEventHandlerModel } from './remove-event-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';
import { EventNotFoundException } from '../../exceptions/event-not-found.exception';
import { Either } from '@src/common/lib/either.lib';
import { EVENT_UTILS_SERVICE_TOKEN } from '../../providers/event-utils.provider';
import { EventUtilServiceModel } from '../../models/event-util-service.model';

@CommandHandler(RemoveEventCommand)
export class RemoveEventHandler implements RemoveEventHandlerModel {
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
    @Inject(EVENT_UTILS_SERVICE_TOKEN)
    private readonly eventUtilsService: EventUtilServiceModel,
  ) {}

  async execute({
    filter,
  }: RemoveEventCommand): Promise<Either<HttpException, EventModel>> {
    const findEvent = await this.eventRepository.findOne(filter);
    if (!findEvent) return Either.left(new EventNotFoundException());
    const deletedEither = await this.eventUtilsService.deleteFiles(
      findEvent.photos,
    );
    if (deletedEither.isLeft())
      return Either.left(deletedEither.getLeftOrElse(null));
    const event = await this.eventRepository.removeOne(filter);
    if (!event) return Either.left(new EventNotFoundException());
    return Either.right(event);
  }
}
