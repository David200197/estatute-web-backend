import { Test, TestingModule } from '@nestjs/testing';
import { PHOTO_REPOSITORY_TOKEN } from '../providers/photo-repository.provider';
import { PhotoLocalRepository } from '../repositories/photo-local.repository';
import {
  UPDATE_PHOTO_HANDLER_TOKEN,
  UpdatePhotoHandlerProvider,
} from '../handlers/update/update-photo-handler.provider';
import { UpdatePhotoHandlerModel } from '../handlers/update/update-photo-handler.model';

describe('UpdatePhotoHandler', () => {
  let handler: UpdatePhotoHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdatePhotoHandlerProvider,
        { provide: PHOTO_REPOSITORY_TOKEN, useClass: PhotoLocalRepository },
      ],
    }).compile();

    handler = module.get<UpdatePhotoHandlerModel>(UPDATE_PHOTO_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
