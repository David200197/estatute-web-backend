import { randomUUID } from 'crypto';

export class FileControl {
  readonly extension: string;
  readonly sizeMb: number;
  readonly name: string;
  readonly nameGenerated: string;

  constructor(readonly fieldName: string, readonly value: Express.Multer.File) {
    const [extension, ...restArray] = this.value.originalname
      .split('.')
      .reverse();
    this.extension = extension;
    this.name = restArray.reverse().join('.');
    this.nameGenerated = `${this.name}-${randomUUID()}.${this.extension}`;
    this.sizeMb = this.value.size / (1024 * 1024);
  }

  isValidExtension(extensions: string[]): boolean {
    return extensions.includes(this.extension);
  }

  isValidMimeType(mimetypes: string[]): boolean {
    return mimetypes.includes(this.value.mimetype);
  }

  isValidLowerThanSizeMb(sizeMb: number) {
    return this.sizeMb < sizeMb;
  }
}
