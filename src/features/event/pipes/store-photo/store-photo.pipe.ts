import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { FileControl } from '@src/common/lib/file-control.lib';

@Injectable()
export class StorePhotoPipe implements PipeTransform {
  transform(value: any) {
    const photos: Array<Express.Multer.File> = value.photos;
    photos
      .map((photo) => new FileControl(photo.filename, photo))
      .map(this.validate);
    return photos;
  }

  private validate(photo: FileControl) {
    if (
      !photo.isValidExtension(['png', 'jpeg', 'jpg']) ||
      !photo.isValidMimeType(['image/png', 'image/jpeg', 'image/jpg'])
    )
      throw new BadRequestException(
        `"${photo.name}" photo cannot be ${photo.extension}, must be png, jpeg or jpg`,
      );
    if (!photo.isValidLowerThanSizeMb(12))
      throw new BadRequestException(
        `"${photo.name}" photo cannot be ${photo.sizeMb}mb, must be lower than 12mb`,
      );
  }
}
