import { Test, TestingModule } from '@nestjs/testing';
import { PHOTO_REPOSITORY_TOKEN } from '../providers/photo-repository.provider';
import { PhotoLocalRepository } from '../repositories/photo-local.repository';
import {
  CREATE_PHOTO_HANDLER_TOKEN,
  CreatePhotoHandlerProvider,
} from '../handlers/create/create-photo-handler.provider';
import { CreatePhotoHandlerModel } from '../handlers/create/create-photo-handler.model';

describe('CreatePhotoHandler', () => {
  let handler: CreatePhotoHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreatePhotoHandlerProvider,
        { provide: PHOTO_REPOSITORY_TOKEN, useClass: PhotoLocalRepository },
      ],
    }).compile();

    handler = module.get<CreatePhotoHandlerModel>(CREATE_PHOTO_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
