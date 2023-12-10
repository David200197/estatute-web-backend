import { Either } from '@src/common/lib/either.lib';
import { LoginAuthResponseDto } from '../../dto/login-auth-response.dto';
import { LoginAuthCommand } from './login-auth.command';
import { HttpException } from '@nestjs/common';
export interface LoginAuthHandlerModel {
  execute(
    loginAuthCommand: LoginAuthCommand,
  ): Promise<Either<HttpException, LoginAuthResponseDto>>;
}
