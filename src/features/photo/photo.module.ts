import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PhotoCron } from './photo.cron';
import { PhotoListener } from './photo.listener';
import { CreatePhotoHandlerProvider } from './handlers/store-photo/create-photo-handler.provider';
import { StoreEngineServiceProvider } from './utils/store-engine-service.provider';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    CreatePhotoHandlerProvider,
    PhotoListener,
    PhotoCron,
    StoreEngineServiceProvider,
  ],
})
export class PhotoModule {}
