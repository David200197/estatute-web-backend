import { Test, TestingModule } from '@nestjs/testing';
import { SocialNetworksRepositoryModel } from '../models/social-networks-repository.model';
import {
  SOCIAL_NETWORKS_REPOSITORY_TOKEN,
  SocialNetworksRepositoryProvider,
} from '../providers/social-networks-repository.provider';

describe('SocialNetworksRepository', () => {
  let repository: SocialNetworksRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialNetworksRepositoryProvider],
    }).compile();

    repository = module.get<SocialNetworksRepositoryModel>(
      SOCIAL_NETWORKS_REPOSITORY_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
