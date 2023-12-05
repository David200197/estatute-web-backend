import { Test, TestingModule } from '@nestjs/testing';
import { EVENT_REPOSITORY_TOKEN } from '../providers/event-repository.provider';
import { EventLocalRepository } from '../repositories/event-local.repository';
import {
  UPDATE_EVENT_HANDLER_TOKEN,
  UpdateEventHandlerProvider,
} from '../handlers/update/update-event-handler.provider';
import { UpdateEventHandlerModel } from '../handlers/update/update-event-handler.model';

describe('UpdateEventHandler', () => {
  let handler: UpdateEventHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateEventHandlerProvider,
        { provide: EVENT_REPOSITORY_TOKEN, useClass: EventLocalRepository },
      ],
    }).compile();

    handler = module.get<UpdateEventHandlerModel>(UPDATE_EVENT_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
