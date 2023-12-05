import { Test, TestingModule } from '@nestjs/testing';
import { StatuteRepositoryModel } from '../models/statute-repository.model';
import {
  STATUTE_REPOSITORY_TOKEN,
  StatuteRepositoryProvider,
} from '../providers/statute-repository.provider';

describe('StatuteRepository', () => {
  let repository: StatuteRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatuteRepositoryProvider],
    }).compile();

    repository = module.get<StatuteRepositoryModel>(STATUTE_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
