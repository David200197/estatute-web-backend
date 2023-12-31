import { HttpException, Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { OnEvent } from '@nestjs/event-emitter';
import { FindOneAdminQuery } from './handlers/find-one/find-one-admin.query';
import { AdminModel, AdminProps } from './models/admin.model';
import { ListenerResponse } from '@src/common/lib/listener-response.lib';
import { EmitterKey, ListenerKey } from '@src/common/constants/emitters';
import { Either } from '@src/common/lib/either.lib';
import { UpdateAdminCommand } from './handlers/update/update-admin.command';
import { DeepPartial } from '@src/common/interfaces/deep-partial';

@Injectable()
export class AdminListener {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @OnEvent(EmitterKey.authValidateAdmin)
  async loginValidateAdmin(filter: DeepPartial<AdminProps>) {
    const admin: Either<HttpException, AdminModel> =
      await this.queryBus.execute(new FindOneAdminQuery(filter));
    return new ListenerResponse(ListenerKey.adminAuthValidateAdmin, admin);
  }

  @OnEvent(EmitterKey.authUpdateRefreshToken)
  async updateRefreshToken(
    filter: DeepPartial<AdminProps>,
    refreshToken: string = null,
  ) {
    const admin: Either<HttpException, AdminModel> =
      await this.commandBus.execute(
        new UpdateAdminCommand(filter, { refreshToken }),
      );
    return new ListenerResponse(ListenerKey.adminAuthUpdateRefreshToken, admin);
  }
}
