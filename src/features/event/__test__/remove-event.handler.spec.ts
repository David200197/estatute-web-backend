import { Test, TestingModule } from '@nestjs/testing';
import { EVENT_REPOSITORY_TOKEN } from '../providers/event-repository.provider';
import { EventLocalRepository } from '../repositories/event-local.repository';
import {
  REMOVE_EVENT_HANDLER_TOKEN,
  RemoveEventHandlerProvider,
} from '../handlers/remove/remove-event-handler.provider';
import { RemoveEventHandlerModel } from '../handlers/remove/remove-event-handler.model';

describe('RemoveEventHandler', () => {
  let handler: RemoveEventHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveEventHandlerProvider,
        { provide: EVENT_REPOSITORY_TOKEN, useClass: EventLocalRepository },
      ],
    }).compile();

    handler = module.get<RemoveEventHandlerModel>(REMOVE_EVENT_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
