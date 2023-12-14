import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginAuthCommand } from './login-auth.command';
import { LoginAuthHandlerModel } from './login-auth-handler.model';
import { LoginAuthResponseDto } from '../../dto/login-auth-response.dto';
import { AdminModel } from '@src/features/admin/models/admin.model';
import { HttpException, Inject } from '@nestjs/common';
import { Either } from '@src/common/lib/either.lib';
import { HashPasswordServiceModel } from '@src/shared/hash-password/hash-password-helper.service';
import { HASH_PASSWORD_SERVICE_TOKEN } from '@src/shared/hash-password/hash-password-service.provider';
import { AdminUnauthorizedException } from '@src/features/admin/exceptions/admin-unauthorized.exception';
import { AUTH_UTILS_SERVICE_MODEL } from '../../providers/auth-util-service.provider';
import { AuthUtilServiceModel } from '../../models/auth-util-service.model';

@CommandHandler(LoginAuthCommand)
export class LoginAuthHandler
  implements LoginAuthHandlerModel, ICommandHandler<LoginAuthCommand>
{
  constructor(
    @Inject(AUTH_UTILS_SERVICE_MODEL)
    private readonly authUtilsService: AuthUtilServiceModel,
    @Inject(HASH_PASSWORD_SERVICE_TOKEN)
    private readonly hashPasswordService: HashPasswordServiceModel,
  ) {}

  async execute({
    loginAuthDto,
  }: LoginAuthCommand): Promise<Either<HttpException, LoginAuthResponseDto>> {
    const { password, username } = loginAuthDto;
    const validatedAdmin = await this.authUtilsService.validateAdmin({
      username,
    });
    const verifiedAdmin = await validatedAdmin.flatMapAsync<AdminModel>(
      async (user) => {
        const isValid = await this.hashPasswordService.verify(
          user.password,
          password,
        );
        if (!isValid) return Either.left(new AdminUnauthorizedException());
        return Either.right(user);
      },
    );
    if (verifiedAdmin.isLeft())
      return Either.left(verifiedAdmin.getLeftOrElse(null));
    const tokens = this.authUtilsService.getTokens(username);
    const refreshTokenHashed = await this.hashPasswordService.hash(
      tokens.refreshToken,
    );
    const updatedAdmin = await this.authUtilsService.updateRefreshToken(
      { username },
      refreshTokenHashed,
    );
    if (updatedAdmin.isLeft())
      return Either.left(validatedAdmin.getLeftOrElse(null));
    return Either.right(tokens);
  }
}
