import { Test, TestingModule } from '@nestjs/testing';
import { PhotoRepositoryModel } from '../models/photo-repository.model';
import {
  PHOTO_REPOSITORY_TOKEN,
  PhotoRepositoryProvider,
} from '../providers/photo-repository.provider';

describe('PhotoRepository', () => {
  let repository: PhotoRepositoryModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoRepositoryProvider],
    }).compile();

    repository = module.get<PhotoRepositoryModel>(PHOTO_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
