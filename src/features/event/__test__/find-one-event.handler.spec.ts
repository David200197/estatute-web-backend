import { Test, TestingModule } from '@nestjs/testing';
import { EVENT_REPOSITORY_TOKEN } from '../providers/event-repository.provider';
import { EventLocalRepository } from '../repositories/event-local.repository';
import {
  FIND_ONE_EVENT_HANDLER_TOKEN,
  FindOneEventHandlerProvider,
} from '../handlers/find-one/find-one-event-handler.provider';
import { FindOneEventHandlerModel } from '../handlers/find-one/find-one-event-handler.model';

describe('FindOneEventHandler', () => {
  let handler: FindOneEventHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneEventHandlerProvider,
        { provide: EVENT_REPOSITORY_TOKEN, useClass: EventLocalRepository },
      ],
    }).compile();

    handler = module.get<FindOneEventHandlerModel>(
      FIND_ONE_EVENT_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
