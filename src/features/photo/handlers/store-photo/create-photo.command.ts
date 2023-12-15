import { StorePhotoDto } from '../../dto/store-photo.dto';

export class StorePhotoCommand {
  constructor(public readonly storePhotoDto: StorePhotoDto) {}
}
