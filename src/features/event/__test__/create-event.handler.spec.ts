import { Test, TestingModule } from '@nestjs/testing';
import { EVENT_REPOSITORY_TOKEN } from '../providers/event-repository.provider';
import { EventLocalRepository } from '../repositories/event-local.repository';
import {
  CREATE_EVENT_HANDLER_TOKEN,
  CreateEventHandlerProvider,
} from '../handlers/create/create-event-handler.provider';
import { CreateEventHandlerModel } from '../handlers/create/create-event-handler.model';

describe('CreateEventHandler', () => {
  let handler: CreateEventHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateEventHandlerProvider,
        { provide: EVENT_REPOSITORY_TOKEN, useClass: EventLocalRepository },
      ],
    }).compile();

    handler = module.get<CreateEventHandlerModel>(CREATE_EVENT_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
