import { StorePhotoDto } from '../dto/store-photo.dto';

export interface PhotoFileManagerModel {
  store(storePhotoDto: StorePhotoDto): Promise<string[]>;
}
