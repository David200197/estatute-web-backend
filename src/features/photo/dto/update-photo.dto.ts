export class UpdatePhotoDto {
  readonly urls: string[];
  readonly photos: Express.Multer.File[];
}
