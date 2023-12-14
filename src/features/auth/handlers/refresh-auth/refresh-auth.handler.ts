import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RefreshAuthCommand } from './refresh-auth.command';
import { RefreshAuthHandlerModel } from './refresh-auth-handler.model';
import { RefreshAuthResponseDto } from '../../dto/refresh-auth-response.dto';
import { ForbiddenException, HttpException, Inject } from '@nestjs/common';
import { Either } from '@src/common/lib/either.lib';
import { AdminModel } from '@src/features/admin/models/admin.model';
import { HASH_PASSWORD_SERVICE_TOKEN } from '@src/shared/hash-password/hash-password-service.provider';
import { HashPasswordServiceModel } from '@src/shared/hash-password/hash-password-helper.service';
import { AUTH_UTILS_SERVICE_MODEL } from '../../providers/auth-util-service.provider';
import { AuthUtilServiceModel } from '../../models/auth-util-service.model';

@CommandHandler(RefreshAuthCommand)
export class RefreshAuthHandler
  implements RefreshAuthHandlerModel, ICommandHandler<RefreshAuthCommand>
{
  constructor(
    @Inject(HASH_PASSWORD_SERVICE_TOKEN)
    private readonly hashPasswordService: HashPasswordServiceModel,
    @Inject(AUTH_UTILS_SERVICE_MODEL)
    private readonly authUtilsService: AuthUtilServiceModel,
  ) {}

  async execute({
    refreshAuthDto,
  }: RefreshAuthCommand): Promise<
    Either<HttpException, RefreshAuthResponseDto>
  > {
    const { admin, refreshToken } = refreshAuthDto;
    const validatedAdmin = await this.authUtilsService.validateAdmin({
      username: admin.username,
    });
    const verifiedAdmin = await validatedAdmin.flatMapAsync<AdminModel>(
      async (user) => {
        if (!user.refreshToken)
          return Either.left(new ForbiddenException('admin access denied'));
        const isValid = await this.hashPasswordService.verify(
          user.refreshToken,
          refreshToken,
        );
        if (!isValid)
          return Either.left(new ForbiddenException('admin access denied'));
        return Either.right(user);
      },
    );
    if (verifiedAdmin.isLeft())
      return Either.left(verifiedAdmin.getLeftOrElse(null));
    const tokens = this.authUtilsService.getTokens(admin.username);
    const refreshTokenHashed = await this.hashPasswordService.hash(
      tokens.refreshToken,
    );
    const updatedAdmin = await this.authUtilsService.updateRefreshToken(
      { username: admin.username },
      refreshTokenHashed,
    );
    if (updatedAdmin.isLeft())
      return Either.left(updatedAdmin.getLeftOrElse(null));
    return Either.right(tokens);
  }
}
