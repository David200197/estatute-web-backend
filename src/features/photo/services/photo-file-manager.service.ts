import { HttpException } from '@nestjs/common';
import { Either } from '@src/common/lib/either.lib';
import { DeletePhotoDto } from '../dto/delete-photo.dto';
import { StorePhotoDto } from '../dto/store-photo.dto';
import { UpdatePhotoDto } from '../dto/update-photo.dto';
import { PhotoFileManagerServiceModel } from '../models/photo-file-manager-service.model';
import { FileControl } from '@src/common/lib/file-control.lib';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';

export class PhotoFileManagerService implements PhotoFileManagerServiceModel {
  private saveFile = async (photo: FileControl) => {
    const eventFolder = path.join(process.cwd(), 'public', 'events');
    writeFile(path.join(eventFolder, photo.nameGenerated), photo.value.buffer);
  };

  private deleteFile = async (url: string) => {
    const eventFolder = path.join(process.cwd(), 'public', 'events');
    unlink(path.join(eventFolder, url));
  };

  store = async ({ photos }: StorePhotoDto): Promise<string[]> => {
    const photoControls = photos.map(
      (photo) => new FileControl(photo.originalname, photo),
    );
    await Promise.all(photoControls.map(this.saveFile));
    return photoControls.map((photo) => photo.nameGenerated);
  };

  update = async ({
    urls,
    photos,
  }: UpdatePhotoDto): Promise<Either<HttpException, string[]>> => {
    await this.delete({ urls });
    const photoUrls = await this.store({ photos });
    return Either.right(photoUrls);
  };

  delete = async ({
    urls,
  }: DeletePhotoDto): Promise<Either<HttpException, boolean>> => {
    await Promise.all(urls.map(this.deleteFile));
    return Either.right(true);
  };
}
