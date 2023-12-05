import { Test, TestingModule } from '@nestjs/testing';
import { AboutUsRepositoryModel } from '../models/about-us-repository.model';
import {
  ABOUT_US_REPOSITORY_TOKEN,
  AboutUsRepositoryProvider,
} from '../providers/about-us-repository.provider';

describe('AboutUsRepository', () => {
  let repository: AboutUsRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutUsRepositoryProvider],
    }).compile();

    repository = module.get<AboutUsRepositoryModel>(ABOUT_US_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
