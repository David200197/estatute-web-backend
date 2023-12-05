import { Test, TestingModule } from '@nestjs/testing';
import { AnniversaryRepositoryModel } from '../models/anniversary-repository.model';
import {
  ANNIVERSARY_REPOSITORY_TOKEN,
  AnniversaryRepositoryProvider,
} from '../providers/anniversary-repository.provider';

describe('AnniversaryRepository', () => {
  let repository: AnniversaryRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnniversaryRepositoryProvider],
    }).compile();

    repository = module.get<AnniversaryRepositoryModel>(
      ANNIVERSARY_REPOSITORY_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
