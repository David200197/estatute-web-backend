import { CommandHandler } from '@nestjs/cqrs';
import { UpdateEventCommand } from './update-event.command';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { UpdateEventHandlerModel } from './update-event-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';
import { EventNotFoundException } from '../../exceptions/event-not-found.exception';
import { Either } from '@src/common/lib/either.lib';
import { EVENT_EMITTER_SERVICE_TOKEN } from '@src/shared/event-emitter/event-emitter-service.provider';
import { EventEmitterServiceModel } from '@src/shared/event-emitter/event-emitter-service.model';
import { EmitterKey, ListenerKey } from '@src/common/constants/emitters';

@CommandHandler(UpdateEventCommand)
export class UpdateEventHandler implements UpdateEventHandlerModel {
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
    @Inject(EVENT_EMITTER_SERVICE_TOKEN)
    private readonly eventEmitterService: EventEmitterServiceModel,
  ) {}

  private async updateFiles(
    photos: Express.Multer.File[],
    urls: string[],
  ): Promise<Either<HttpException, string[]>> {
    const listener = await this.eventEmitterService.emitAsync(
      EmitterKey.eventUpdatePhotos,
      { photos, urls },
    );
    return listener.get<Promise<Either<HttpException, string[]>>>(
      ListenerKey.photoEventUpdatePhotos,
    );
  }

  async execute({
    filter,
    updateEventDto,
    photos,
  }: UpdateEventCommand): Promise<Either<HttpException, EventModel>> {
    const findEvent = await this.eventRepository.findOne(filter);
    if (!findEvent) return Either.left(new EventNotFoundException());
    if (!photos) {
      const event = await this.eventRepository.updateOne(
        filter,
        updateEventDto,
      );
      if (!event) return Either.left(new EventNotFoundException());
      return Either.right(event);
    }
    const eitherUrls = await this.updateFiles(photos, findEvent.photos);
    return eitherUrls.flatMapAsync(async (urls) => {
      const event = await this.eventRepository.updateOne(filter, {
        ...updateEventDto,
        photos: urls,
      });
      if (!event) return Either.left(new EventNotFoundException());
      return Either.right(event);
    });
  }
}
