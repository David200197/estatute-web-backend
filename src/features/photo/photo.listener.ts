import { HttpException, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { OnEvent } from '@nestjs/event-emitter';
import { EmitterKey, ListenerKey } from '@src/common/constants/emitters';
import { StorePhotoCommand } from './handlers/store-photo/create-photo.command';
import { StorePhotoDto } from './dto/store-photo.dto';
import { ListenerResponse } from '@src/common/lib/listener-response.lib';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { UpdatePhotoCommand } from './handlers/update-photo/update-photo.command';
import { DeletePhotoCommand } from './handlers/delete-photo/delete-photo.command';
import { DeletePhotoDto } from './dto/delete-photo.dto';
import { Either } from '@src/common/lib/either.lib';

@Injectable()
export class PhotoListener {
  constructor(private readonly commandBus: CommandBus) {}

  @OnEvent(EmitterKey.eventStorePhotos, { async: true })
  async storePhotos(storePhotoDto: StorePhotoDto) {
    const photos: string[] = await this.commandBus.execute(
      new StorePhotoCommand(storePhotoDto),
    );
    return new ListenerResponse(ListenerKey.photoEventStorePhotos, photos);
  }

  @OnEvent(EmitterKey.eventUpdatePhotos, { async: true })
  async updatePhotos(updatePhotoDto: UpdatePhotoDto) {
    const updatePhotos: Either<HttpException, string[]> =
      await this.commandBus.execute(new UpdatePhotoCommand(updatePhotoDto));
    return new ListenerResponse(
      ListenerKey.photoEventUpdatePhotos,
      updatePhotos,
    );
  }

  @OnEvent(EmitterKey.eventDeletePhotos, { async: true })
  async deletePhotos(deletePhotoDto: DeletePhotoDto) {
    const deletedPhotos: Either<HttpException, boolean> =
      await this.commandBus.execute(new DeletePhotoCommand(deletePhotoDto));
    return new ListenerResponse(
      ListenerKey.photoEventDeletePhotos,
      deletedPhotos,
    );
  }
}
