import { Test, TestingModule } from '@nestjs/testing';
import { PhotoListener } from '../photo.listener';
import { CqrsModule } from '@nestjs/cqrs';
import { StorePhotoHandlerProvider } from '../handlers/store-photo/create-photo-handler.provider';
import { PhotoFileManager } from '../file-manager/photo.file-manager';
import { PHOTO_FILE_MANAGER_TOKEN } from '../providers/photo-file-manager.provider';
import { ListenerKey } from '@src/common/constants/emitters';
import { PhotoMotherObject } from './photo.mother-object';
import { DeletePhotoHandlerProvider } from '../handlers/delete-photo/delete-photo-handler.provider';

describe('StorePhoto - PhotoListener', () => {
  let listener: PhotoListener;
  let currentUrls: string[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        PhotoListener,
        StorePhotoHandlerProvider,
        DeletePhotoHandlerProvider,
        { provide: PHOTO_FILE_MANAGER_TOKEN, useClass: PhotoFileManager },
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

  it('should store one photo', async () => {
    const photo = PhotoMotherObject.getDefaultPhoto();
    const res = await listener.storePhotos({ photos: [photo] });
    currentUrls = res.data as string[];
    expect(res.listener).toEqual(ListenerKey.photoEventStorePhotos);
    expect(res.data).toEqual([expect.any(String)]);
  });

  it('should store many photos', async () => {
    const photo = PhotoMotherObject.getDefaultPhoto();
    const res = await listener.storePhotos({
      photos: Array(5).fill(photo),
    });
    currentUrls = res.data as string[];
    expect(res.listener).toEqual(ListenerKey.photoEventStorePhotos);
    expect(res.data).toEqual(Array(5).fill(expect.any(String)));
  });
});
