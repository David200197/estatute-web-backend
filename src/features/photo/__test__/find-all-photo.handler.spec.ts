import { Test, TestingModule } from '@nestjs/testing';
import { PHOTO_REPOSITORY_TOKEN } from '../providers/photo-repository.provider';
import { PhotoLocalRepository } from '../repositories/photo-local.repository';
import {
  FIND_ALL_PHOTO_HANDLER_TOKEN,
  FindAllPhotoHandlerProvider,
} from '../handlers/find-all/find-all-photo-handler.provider';
import { FindAllPhotoHandlerModel } from '../handlers/find-all/find-all-photo-handler.model';

describe('FindAllPhotoHandler', () => {
  let handler: FindAllPhotoHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllPhotoHandlerProvider,
        { provide: PHOTO_REPOSITORY_TOKEN, useClass: PhotoLocalRepository },
      ],
    }).compile();

    handler = module.get<FindAllPhotoHandlerModel>(
      FIND_ALL_PHOTO_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
