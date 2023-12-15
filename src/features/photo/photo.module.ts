import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PhotoCron } from './photo.cron';
import { PhotoListener } from './photo.listener';
import { CreatePhotoHandlerProvider } from './handlers/store-photo/create-photo-handler.provider';
import { PhotoFileManagerProvider } from './providers/photo-file-manager.provider';
import { UpdatePhotoHandlerProvider } from './handlers/update-photo/update-photo-handler.provider';
import { DeletePhotoHandlerProvider } from './handlers/delete-photo/delete-photo-handler.provider';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    CreatePhotoHandlerProvider,
    UpdatePhotoHandlerProvider,
    DeletePhotoHandlerProvider,
    PhotoListener,
    PhotoCron,
    PhotoFileManagerProvider,
  ],
})
export class PhotoModule {}
