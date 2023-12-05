import { Test, TestingModule } from '@nestjs/testing';
import { EVENT_REPOSITORY_TOKEN } from '../providers/event-repository.provider';
import { EventLocalRepository } from '../repositories/event-local.repository';
import {
  FIND_ALL_EVENT_HANDLER_TOKEN,
  FindAllEventHandlerProvider,
} from '../handlers/find-all/find-all-event-handler.provider';
import { FindAllEventHandlerModel } from '../handlers/find-all/find-all-event-handler.model';

describe('FindAllEventHandler', () => {
  let handler: FindAllEventHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllEventHandlerProvider,
        { provide: EVENT_REPOSITORY_TOKEN, useClass: EventLocalRepository },
      ],
    }).compile();

    handler = module.get<FindAllEventHandlerModel>(
      FIND_ALL_EVENT_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
