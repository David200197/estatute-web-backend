import { Test, TestingModule } from '@nestjs/testing';
import { UserRepositoryModel } from '../models/user-repository.model';
import {
  USER_REPOSITORY_TOKEN,
  UserRepositoryProvider,
} from '../providers/user-repository.provider';

describe('UserRepository', () => {
  let repository: UserRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRepositoryProvider],
    }).compile();

    repository = module.get<UserRepositoryModel>(USER_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
