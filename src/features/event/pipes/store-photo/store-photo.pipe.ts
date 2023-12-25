import { Injectable, PipeTransform } from '@nestjs/common';
import { CheckPhotoPipe } from '../abstract/check-photo-pipe.abstract';

@Injectable()
export class StorePhotoPipe extends CheckPhotoPipe implements PipeTransform {
  transform(photos: Array<Express.Multer.File>) {
    return super.transform(photos);
  }
}
