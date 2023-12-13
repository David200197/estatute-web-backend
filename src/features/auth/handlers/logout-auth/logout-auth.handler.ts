import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LogoutAuthCommand } from './logout-auth.command';
import { LogoutAuthHandlerModel } from './logout-auth-handler.model';
import { HttpException, Inject } from '@nestjs/common';
import { EVENT_EMITTER_SERVICE_TOKEN } from '@src/shared/event-emitter/event-emitter-service.provider';
import { EventEmitterServiceModel } from '@src/shared/event-emitter/event-emitter-service.model';
import { emitter, responseListeners } from '@src/common/constants/emitters';
import { Either } from '@src/common/lib/either.lib';
import { AdminModel } from '@src/features/admin/models/admin.model';

@CommandHandler(LogoutAuthCommand)
export class LogoutAuthHandler
  implements LogoutAuthHandlerModel, ICommandHandler<LogoutAuthCommand>
{
  constructor(
    @Inject(EVENT_EMITTER_SERVICE_TOKEN)
    private readonly eventEmitterService: EventEmitterServiceModel,
  ) {}

  async execute(
    logoutAuthCommand: LogoutAuthCommand,
  ): Promise<Either<HttpException, void>> {
    const { logoutAuthDto } = logoutAuthCommand;
    const username = logoutAuthDto.admin.username;
    const listener = await this.eventEmitterService.emitAsync(
      emitter.authValidateAdmin,
      { username },
    );
    const admin = listener.get<Either<HttpException, AdminModel>>(
      responseListeners.adminAuthValidateAdmin,
    );

    return admin.flatMapAsync<void>(async () => {
      const listener = await this.eventEmitterService.emitAsync(
        emitter.authUpdateRefreshToken,
        { username },
        null,
      );
      const admin = listener.get<Either<HttpException, AdminModel>>(
        responseListeners.adminAuthUpdateRefreshToken,
      );
      if (admin.isLeft()) return admin.leftEither();
    });
  }
}
