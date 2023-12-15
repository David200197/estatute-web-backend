import { CommandHandler } from '@nestjs/cqrs';
import { StorePhotoCommand } from './create-photo.command';
import { CreatePhotoHandlerModel, Urls } from './create-photo-handler.model';
import { StoreEngineServiceModel } from '../../utils/store-engine-service.model';
import { Inject } from '@nestjs/common';
import { STORE_ENGINE_SERVICE_TOKEN } from '../../utils/store-engine-service.provider';

@CommandHandler(StorePhotoCommand)
export class StorePhotoHandler implements CreatePhotoHandlerModel {
  constructor(
    @Inject(STORE_ENGINE_SERVICE_TOKEN)
    private readonly storeEngineService: StoreEngineServiceModel,
  ) {}

  execute({ storePhotoDto }: StorePhotoCommand): Promise<Urls> {
    const { buffers, name } = storePhotoDto;
    //TODO: manipulate the name
    return this.storeEngineService.store(name, buffers);
  }
}
