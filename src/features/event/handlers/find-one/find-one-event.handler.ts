import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindOneEventQuery } from './find-one-event.query';
import { EventRepositoryModel } from '../../models/event-repository.model';
import { FindOneEventHandlerModel } from './find-one-event-handler.model';
import { Inject } from '@nestjs/common';
import { EVENT_REPOSITORY_TOKEN } from '../../providers/event-repository.provider';
import { EventModel } from '../../models/event.model';
import { Maybe } from '@src/common/lib/maybe.lib';

@QueryHandler(FindOneEventQuery)
export class FindOneEventHandler
  implements FindOneEventHandlerModel, IQueryHandler<FindOneEventQuery>
{
  constructor(
    @Inject(EVENT_REPOSITORY_TOKEN)
    private eventRepository: EventRepositoryModel,
  ) {}

  async execute({ filter }: FindOneEventQuery): Promise<Maybe<EventModel>> {
    const event = await this.eventRepository.findOne(filter);
    return Maybe.fromValue(event);
  }
}
