import { HttpException } from '@nestjs/common';
import { Either } from '@src/common/lib/either.lib';

export interface PhotoServiceModel {
  storeFiles(photos: Express.Multer.File[]): Promise<string[]>;
  deleteFiles(urls: string[]): Promise<Either<HttpException, boolean>>;
  updateFiles(
    photos: Express.Multer.File[],
    urls: string[],
  ): Promise<Either<HttpException, string[]>>;
}
