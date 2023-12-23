import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AdminServiceModel } from '../models/admin-service.model';
import { AdminModel, AdminProps } from '@src/features/admin/models/admin.model';
import { HttpException, Inject } from '@nestjs/common';
import { EVENT_EMITTER_SERVICE_TOKEN } from '@src/shared/event-emitter/event-emitter-service.provider';
import { EventEmitterServiceModel } from '@src/shared/event-emitter/event-emitter-service.model';
import { EmitterKey, ListenerKey } from '@src/common/constants/emitters';
import { Either } from '@src/common/lib/either.lib';

export class AdminService implements AdminServiceModel {
  constructor(
    @Inject(EVENT_EMITTER_SERVICE_TOKEN)
    private readonly eventEmitterService: EventEmitterServiceModel,
  ) {}

  async validateAdmin(filter: DeepPartial<AdminProps>) {
    const listener = await this.eventEmitterService.emitAsync(
      EmitterKey.authValidateAdmin,
      filter,
    );
    const admin = listener.get<Either<HttpException, AdminModel>>(
      ListenerKey.adminAuthValidateAdmin,
    );
    return admin;
  }

  async updateRefreshToken(
    filter: DeepPartial<AdminProps>,
    refreshToken: string,
  ) {
    const listener = await this.eventEmitterService.emitAsync(
      EmitterKey.authUpdateRefreshToken,
      filter,
      refreshToken,
    );
    const admin = listener.get<Either<HttpException, AdminModel>>(
      ListenerKey.adminAuthUpdateRefreshToken,
    );
    return admin;
  }
}
