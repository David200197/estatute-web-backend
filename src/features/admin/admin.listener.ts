import { HttpException, Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { OnEvent } from '@nestjs/event-emitter';
import { FindOneAdminQuery } from './handlers/find-one/find-one-admin.query';
import { AdminModel } from './models/admin.model';
import { ListenerResponse } from '@src/common/lib/listener-response.lib';
import { EMITTER, RESPONSE_LISTENERS } from '@src/common/constants/emitters';
import { Either } from '@src/common/lib/either.lib';

@Injectable()
export class AdminListener {
  constructor(private readonly queryBus: QueryBus) {}

  @OnEvent(EMITTER.AUTH_LOGIN_VALIDATE_ADMIN, { async: true })
  async loginValidateAdmin(username: string) {
    const admin: Either<HttpException, AdminModel> =
      await this.queryBus.execute(new FindOneAdminQuery({ username }));
    return new ListenerResponse(
      RESPONSE_LISTENERS.ADMIN_AUTH_LOGIN_VALIDATE_ADMIN,
      { admin },
    );
  }
}
