import { Test, TestingModule } from '@nestjs/testing';
import { SocialNetworkRepositoryModel } from '../models/social-network-repository.model';
import {
  SOCIAL_NETWORK_REPOSITORY_TOKEN,
  SocialNetworkRepositoryProvider,
} from '../providers/social-network-repository.provider';

describe('SocialNetworkRepository', () => {
  let repository: SocialNetworkRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialNetworkRepositoryProvider],
    }).compile();

    repository = module.get<SocialNetworkRepositoryModel>(
      SOCIAL_NETWORK_REPOSITORY_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
