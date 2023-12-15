import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { OnEvent } from '@nestjs/event-emitter';
import { EmitterKey, ListenerKey } from '@src/common/constants/emitters';
import { StorePhotoCommand } from './handlers/store-photo/create-photo.command';
import { StorePhotoDto } from './dto/store-photo.dto';
import { ListenerResponse } from '@src/common/lib/listener-response.lib';

@Injectable()
export class PhotoListener {
  constructor(private readonly commandBus: CommandBus) {}

  @OnEvent(EmitterKey.eventStorePhotos)
  async storePhotos(storePhotoDto: StorePhotoDto) {
    const photos: string[] = await this.commandBus.execute(
      new StorePhotoCommand(storePhotoDto),
    );
    return new ListenerResponse(ListenerKey.photoEventStorePhotos, photos);
  }
}
