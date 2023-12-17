import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RefreshAuthCommand } from './refresh-auth.command';
import { RefreshAuthHandlerModel } from './refresh-auth-handler.model';
import { RefreshAuthResponseDto } from '../../dto/refresh-auth-response.dto';
import { HttpException, Inject } from '@nestjs/common';
import { Either } from '@src/common/lib/either.lib';
import { HASH_PASSWORD_SERVICE_TOKEN } from '@src/shared/hash-password/hash-password-service.provider';
import { HashPasswordServiceModel } from '@src/shared/hash-password/hash-password-helper.service';
import { AUTH_UTILS_SERVICE_MODEL } from '../../providers/auth-util-service.provider';
import { AuthUtilServiceModel } from '../../models/auth-util-service.model';
import { AuthForbiddenException } from '../../exceptions/auth-forbidden.exception';
import { ADMIN_SERVICE_TOKEN } from '../../providers/admin-service.provider';
import { AdminServiceModel } from '../../models/admin-service.model';

@CommandHandler(RefreshAuthCommand)
export class RefreshAuthHandler
  implements RefreshAuthHandlerModel, ICommandHandler<RefreshAuthCommand>
{
  constructor(
    @Inject(HASH_PASSWORD_SERVICE_TOKEN)
    private readonly hashPasswordService: HashPasswordServiceModel,
    @Inject(AUTH_UTILS_SERVICE_MODEL)
    private readonly authUtilsService: AuthUtilServiceModel,
    @Inject(ADMIN_SERVICE_TOKEN)
    private readonly adminService: AdminServiceModel,
  ) {}

  async execute({
    refreshAuthDto,
  }: RefreshAuthCommand): Promise<
    Either<HttpException, RefreshAuthResponseDto>
  > {
    const { admin, refreshToken } = refreshAuthDto;
    if (!admin.refreshToken) return Either.left(new AuthForbiddenException());
    const isValid = await this.hashPasswordService.verify(
      admin.refreshToken,
      refreshToken,
    );
    if (!isValid) return Either.left(new AuthForbiddenException());
    const tokens = this.authUtilsService.getTokens(admin.username);
    const refreshTokenHashed = await this.hashPasswordService.hash(
      tokens.refreshToken,
    );
    const updatedAdmin = await this.adminService.updateRefreshToken(
      { username: admin.username },
      refreshTokenHashed,
    );
    if (updatedAdmin.isLeft())
      return Either.left(updatedAdmin.getLeftOrElse(null));
    return Either.right(tokens);
  }
}
