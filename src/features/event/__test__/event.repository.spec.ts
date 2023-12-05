import { Test, TestingModule } from '@nestjs/testing';
import { EventRepositoryModel } from '../models/event-repository.model';
import {
  EVENT_REPOSITORY_TOKEN,
  EventRepositoryProvider,
} from '../providers/event-repository.provider';

describe('EventRepository', () => {
  let repository: EventRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventRepositoryProvider],
    }).compile();

    repository = module.get<EventRepositoryModel>(EVENT_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
