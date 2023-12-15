import { CommandHandler } from '@nestjs/cqrs';
import { CreateEventCommand } from './create-event.command';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { CreateEventHandlerModel } from './create-event-handler.model';
import { Inject } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';
import { EventEmitterServiceModel } from '@src/shared/event-emitter/event-emitter-service.model';
import { EVENT_EMITTER_SERVICE_TOKEN } from '@src/shared/event-emitter/event-emitter-service.provider';
import { EmitterKey, ListenerKey } from '@src/common/constants/emitters';

@CommandHandler(CreateEventCommand)
export class CreateEventHandler implements CreateEventHandlerModel {
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
    @Inject(EVENT_EMITTER_SERVICE_TOKEN)
    private readonly eventEmitterService: EventEmitterServiceModel,
  ) {}

  private async storeFiles(photos: Express.Multer.File[]): Promise<string[]> {
    const listener = await this.eventEmitterService.emitAsync(
      EmitterKey.eventStorePhotos,
      { photos },
    );
    return listener.get<string[]>(ListenerKey.photoEventStorePhotos);
  }

  async execute({
    createEventDto,
    photos,
  }: CreateEventCommand): Promise<EventModel> {
    const urls = await this.storeFiles(photos);
    return await this.eventRepository.create({
      ...createEventDto,
      photos: urls,
    });
  }
}
