import { CommandHandler } from '@nestjs/cqrs';
import { CreateEventCommand } from './create-event.command';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { CreateEventHandlerModel } from './create-event-handler.model';
import { Inject } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';
import { PHOTO_SERVICE_TOKEN } from '../../providers/photo-service.provider';
import { PhotoServiceModel } from '../../models/photo-service.model';

@CommandHandler(CreateEventCommand)
export class CreateEventHandler implements CreateEventHandlerModel {
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
    @Inject(PHOTO_SERVICE_TOKEN)
    private readonly photoService: PhotoServiceModel,
  ) {}

  async execute({
    createEventDto,
    photos,
  }: CreateEventCommand): Promise<EventModel> {
    const urls = await this.photoService.storeFiles(photos);
    return await this.eventRepository.create({
      ...createEventDto,
      photos: urls,
    });
  }
}
