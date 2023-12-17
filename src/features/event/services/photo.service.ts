import { HttpException, Inject, Injectable } from '@nestjs/common';
import { PhotoServiceModel } from '../models/photo-service.model';
import { EVENT_EMITTER_SERVICE_TOKEN } from '@src/shared/event-emitter/event-emitter-service.provider';
import { EventEmitterServiceModel } from '@src/shared/event-emitter/event-emitter-service.model';
import { EmitterKey, ListenerKey } from '@src/common/constants/emitters';
import { Either } from '@src/common/lib/either.lib';

@Injectable()
export class PhotoService implements PhotoServiceModel {
  constructor(
    @Inject(EVENT_EMITTER_SERVICE_TOKEN)
    private readonly eventEmitterService: EventEmitterServiceModel,
  ) {}

  async storeFiles(photos: Express.Multer.File[]): Promise<string[]> {
    const listener = await this.eventEmitterService.emitAsync(
      EmitterKey.eventStorePhotos,
      { photos },
    );
    return listener.get<string[]>(ListenerKey.photoEventStorePhotos);
  }

  async deleteFiles(urls: string[]): Promise<Either<HttpException, boolean>> {
    const listener = await this.eventEmitterService.emitAsync(
      EmitterKey.eventDeletePhotos,
      { urls },
    );
    return listener.get<Promise<Either<HttpException, boolean>>>(
      ListenerKey.photoEventDeletePhotos,
    );
  }

  async updateFiles(
    photos: Express.Multer.File[],
    urls: string[],
  ): Promise<Either<HttpException, string[]>> {
    const listener = await this.eventEmitterService.emitAsync(
      EmitterKey.eventUpdatePhotos,
      { photos, urls },
    );
    return listener.get<Promise<Either<HttpException, string[]>>>(
      ListenerKey.photoEventUpdatePhotos,
    );
  }
}
