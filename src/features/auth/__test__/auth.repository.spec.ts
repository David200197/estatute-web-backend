import { Test, TestingModule } from '@nestjs/testing';
import { AuthRepositoryModel } from '../models/auth-repository.model';
import {
  AUTH_REPOSITORY_TOKEN,
  AuthRepositoryProvider,
} from '../providers/auth-repository.provider';

describe('AuthRepository', () => {
  let repository: AuthRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthRepositoryProvider],
    }).compile();

    repository = module.get<AuthRepositoryModel>(AUTH_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
