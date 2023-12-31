import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PhotoCron } from './photo.cron';
import { PhotoListener } from './photo.listener';
import { StorePhotoHandlerProvider } from './handlers/store-photo/create-photo-handler.provider';
import { PhotoFileManagerServiceProvider } from './providers/photo-file-manager-service.provider';
import { UpdatePhotoHandlerProvider } from './handlers/update-photo/update-photo-handler.provider';
import { DeletePhotoHandlerProvider } from './handlers/delete-photo/delete-photo-handler.provider';
import { PhotoCli } from './photo.cli';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    StorePhotoHandlerProvider,
    UpdatePhotoHandlerProvider,
    DeletePhotoHandlerProvider,
    PhotoListener,
    PhotoCron,
    PhotoFileManagerServiceProvider,
    PhotoCli,
  ],
})
export class PhotoModule {}
