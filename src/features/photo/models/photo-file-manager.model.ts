import { HttpException } from '@nestjs/common';
import { StorePhotoDto } from '../dto/store-photo.dto';
import { Either } from '@src/common/lib/either.lib';
import { UpdatePhotoDto } from '../dto/update-photo.dto';
import { DeletePhotoDto } from '../dto/delete-photo.dto';

export interface PhotoFileManagerModel {
  store(storePhotoDto: StorePhotoDto): Promise<string[]>;
  update(
    updatePhotoDto: UpdatePhotoDto,
  ): Promise<Either<HttpException, string[]>>;
  delete(
    deletePhotoDto: DeletePhotoDto,
  ): Promise<Either<HttpException, boolean>>;
}
