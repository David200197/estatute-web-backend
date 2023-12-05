import { Test, TestingModule } from '@nestjs/testing';
import { AdminRepositoryModel } from '../models/admin-repository.model';
import {
  ADMIN_REPOSITORY_TOKEN,
  AdminRepositoryProvider,
} from '../providers/admin-repository.provider';

describe('AdminRepository', () => {
  let repository: AdminRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminRepositoryProvider],
    }).compile();

    repository = module.get<AdminRepositoryModel>(ADMIN_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
