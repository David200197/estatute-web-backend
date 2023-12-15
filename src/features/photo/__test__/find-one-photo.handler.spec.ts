import { Test, TestingModule } from '@nestjs/testing';
import { PHOTO_REPOSITORY_TOKEN } from '../providers/photo-repository.provider';
import { PhotoLocalRepository } from '../repositories/photo-local.repository';
import {
  FIND_ONE_PHOTO_HANDLER_TOKEN,
  FindOnePhotoHandlerProvider,
} from '../handlers/find-one/find-one-photo-handler.provider';
import { FindOnePhotoHandlerModel } from '../handlers/find-one/find-one-photo-handler.model';

describe('FindOnePhotoHandler', () => {
  let handler: FindOnePhotoHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOnePhotoHandlerProvider,
        { provide: PHOTO_REPOSITORY_TOKEN, useClass: PhotoLocalRepository },
      ],
    }).compile();

    handler = module.get<FindOnePhotoHandlerModel>(
      FIND_ONE_PHOTO_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
