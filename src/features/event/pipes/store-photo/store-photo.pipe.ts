import { Injectable, PipeTransform } from '@nestjs/common';
import { CheckPhotoPipe } from '../abstract/check-photo-pipe.abstract';

@Injectable()
export class StorePhotoPipe extends CheckPhotoPipe implements PipeTransform {
  transform(value: any) {
    if (!value?.photos) {
      value.photos = [];
      return value;
    }
    return super.transform(value);
  }
}