import { Test, TestingModule } from '@nestjs/testing';
import { PhotoListener } from '../photo.listener';
import { CqrsModule } from '@nestjs/cqrs';
import { StorePhotoHandlerProvider } from '../handlers/store-photo/create-photo-handler.provider';
import { PhotoFileManagerService } from '../services/photo-file-manager.service';
import { PHOTO_FILE_MANAGER_SERVICE_TOKEN } from '../providers/photo-file-manager-service.provider';
import { ListenerKey } from '@src/common/constants/emitters';
import { PhotoMotherObject } from './photo.mother-object';
import { DeletePhotoHandlerProvider } from '../handlers/delete-photo/delete-photo-handler.provider';
import { UpdatePhotoHandlerProvider } from '../handlers/update-photo/update-photo-handler.provider';
import { ListenerResponse } from '@src/common/lib/listener-response.lib';
import { HttpException } from '@nestjs/common';
import { Either } from '@src/common/lib/either.lib';

describe('UpdatePhoto - PhotoListener', () => {
  let listener: PhotoListener;
  let currentUrls: string[];

  const storePhoto = async (photos: Express.Multer.File[]) => {
    const res = await listener.storePhotos({ photos });
    return res.data as string[];
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        PhotoListener,
        StorePhotoHandlerProvider,
        UpdatePhotoHandlerProvider,
        DeletePhotoHandlerProvider,
        {
          provide: PHOTO_FILE_MANAGER_SERVICE_TOKEN,
          useClass: PhotoFileManagerService,
        },
      ],
    }).compile();
    await module.init();
    listener = module.get<PhotoListener>(PhotoListener);
  });

  afterEach(async () => {
    if (!currentUrls) return;
    await listener.deletePhotos({ urls: currentUrls });
    currentUrls = null;
  });

  it('should be defined', () => {
    expect(listener).toBeDefined();
  });

  it('should update one photo', async () => {
    const photo = PhotoMotherObject.getDefaultPhoto();
    const oldUrls = await storePhoto([photo]);
    const res: ListenerResponse = await listener.updatePhotos({
      photos: [photo],
      urls: oldUrls,
    });
    const eitherResponse = res.data as Either<HttpException, string[]>;
    currentUrls = eitherResponse.getOrElse([]);
    expect(res.listener).toEqual(ListenerKey.photoEventUpdatePhotos);
    expect(currentUrls).toEqual([expect.any(String)]);
  });

  it('should update many photos', async () => {
    const photo = PhotoMotherObject.getDefaultPhoto();
    const oldUrls = await storePhoto([photo]);
    const res = await listener.updatePhotos({
      photos: Array(5).fill(photo),
      urls: oldUrls,
    });
    const eitherResponse = res.data as Either<HttpException, string[]>;
    currentUrls = eitherResponse.getOrElse([]);
    expect(res.listener).toEqual(ListenerKey.photoEventUpdatePhotos);
    expect(currentUrls).toEqual(Array(5).fill(expect.any(String)));
  });
});
