import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PhotoRepositoryProvider } from './providers/photo-repository.provider';
import { PhotoController } from './photo.controller';
import { PhotoCron } from './photo.cron';
import { PhotoListener } from './photo.listener';
import { FindAllPhotoHandlerProvider } from './handlers/find-all/find-all-photo-handler.provider';
import { CreatePhotoHandlerProvider } from './handlers/create/create-photo-handler.provider';
import { FindOnePhotoHandlerProvider } from './handlers/find-one/find-one-photo-handler.provider';
import { UpdatePhotoHandlerProvider } from './handlers/update/update-photo-handler.provider';
import { RemovePhotoHandlerProvider } from './handlers/remove/remove-photo-handler.provider';

@Module({
  imports: [CqrsModule],
  controllers: [PhotoController],
  providers: [
    PhotoRepositoryProvider,
    FindAllPhotoHandlerProvider,
    CreatePhotoHandlerProvider,
    FindOnePhotoHandlerProvider,
    UpdatePhotoHandlerProvider,
    RemovePhotoHandlerProvider,
    PhotoListener,
    PhotoCron,
  ],
})
export class PhotoModule {}
