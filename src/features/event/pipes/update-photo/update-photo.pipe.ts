import { Injectable, PipeTransform } from '@nestjs/common';
import { CheckPhotoPipe } from '../abstract/check-photo-pipe.abstract';

@Injectable()
export class UpdatePhotoPipe extends CheckPhotoPipe implements PipeTransform {
  transform(photos?: Array<Express.Multer.File>) {
    if (!photos || !photos?.length) return undefined;
    return super.transform(photos);
  }
}
