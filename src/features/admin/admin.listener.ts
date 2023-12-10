import { HttpException, Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { OnEvent } from '@nestjs/event-emitter';
import { FindOneAdminQuery } from './handlers/find-one/find-one-admin.query';
import { AdminModel } from './models/admin.model';
import { ListenerResponse } from '@src/common/lib/listener-response.lib';
import { emitter, responseListeners } from '@src/common/constants/emitters';
import { Either } from '@src/common/lib/either.lib';
import { UpdateAdminCommand } from './handlers/update/update-admin.command';

@Injectable()
export class AdminListener {
  constructor(private readonly queryBus: QueryBus) {}

  @OnEvent(emitter.authLoginValidateAdmin, { async: true })
  async loginValidateAdmin(username: string) {
    const admin: Either<HttpException, AdminModel> =
      await this.queryBus.execute(new FindOneAdminQuery({ username }));
    return new ListenerResponse(
      responseListeners.adminAuthLoginValidateAdmin,
      admin,
    );
  }

  @OnEvent(emitter.authLoginUpdateRefreshToken)
  async updateRefreshToken(username: string, refreshToken: string) {
    await this.queryBus.execute(
      new UpdateAdminCommand({ username }, { refreshToken }),
    );
  }
}
