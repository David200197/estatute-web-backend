import { Test, TestingModule } from '@nestjs/testing';
import { PHOTO_REPOSITORY_TOKEN } from '../providers/photo-repository.provider';
import { PhotoLocalRepository } from '../repositories/photo-local.repository';
import {
  REMOVE_PHOTO_HANDLER_TOKEN,
  RemovePhotoHandlerProvider,
} from '../handlers/remove/remove-photo-handler.provider';
import { RemovePhotoHandlerModel } from '../handlers/remove/remove-photo-handler.model';

describe('RemovePhotoHandler', () => {
  let handler: RemovePhotoHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemovePhotoHandlerProvider,
        { provide: PHOTO_REPOSITORY_TOKEN, useClass: PhotoLocalRepository },
      ],
    }).compile();

    handler = module.get<RemovePhotoHandlerModel>(REMOVE_PHOTO_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
