import { Test, TestingModule } from '@nestjs/testing';
import { InvitationRepositoryModel } from '../models/invitation-repository.model';
import {
  INVITATION_REPOSITORY_TOKEN,
  InvitationRepositoryProvider,
} from '../providers/invitation-repository.provider';

describe('InvitationRepository', () => {
  let repository: InvitationRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvitationRepositoryProvider],
    }).compile();

    repository = module.get<InvitationRepositoryModel>(
      INVITATION_REPOSITORY_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
