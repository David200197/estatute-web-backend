export class PhotoMotherObject {
  static getDefaultPhoto(): Express.Multer.File {
    return {
      buffer: Buffer.from([]),
      destination: 'uploads/',
      fieldname: 'files',
      filename: '1231241234242343245435345234',
      mimetype: 'image/jpeg',
      originalname: 'Example.jpeg',
      path: 'uploads/1231241234242343245435345234',
      size: 30517,
    } as any;
  }
}
