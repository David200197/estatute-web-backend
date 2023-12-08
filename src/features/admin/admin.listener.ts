import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { OnEvent } from '@nestjs/event-emitter';
import { FindOneAdminQuery } from './handlers/find-one/find-one-admin.query';
import { Maybe } from '@src/common/lib/maybe.lib';
import { AdminModel } from './models/admin.model';
import { ListenerResponse } from '@src/common/lib/listener-response.lib';
import { EMITTER, RESPONSE_LISTENERS } from '@src/common/constants/emitters';

@Injectable()
export class AdminListener {
  constructor(private readonly queryBus: QueryBus) {}

  @OnEvent(EMITTER.AUTH_LOGIN_VALIDATE_ADMIN, { async: true })
  async loginValidateAdmin(username: string) {
    const admin: Maybe<AdminModel> = await this.queryBus.execute(
      new FindOneAdminQuery({ username }),
    );
    return new ListenerResponse(
      RESPONSE_LISTENERS.ADMIN_AUTH_LOGIN_VALIDATE_ADMIN,
      admin,
    );
  }
}
