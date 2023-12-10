import { QueryHandler } from '@nestjs/cqrs';
import { FindAllEventQuery } from './find-all-event.query';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { FindAllEventHandlerModel } from './find-all-event-handler.model';
import { Inject } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { EventsModel } from '../../models/events.model';

@QueryHandler(FindAllEventQuery)
export class FindAllEventHandler implements FindAllEventHandlerModel {
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllEventQuery): Promise<ResponseWithPaginate<EventsModel>> {
    return await this.eventRepository.findAll(filter, options);
  }
}
