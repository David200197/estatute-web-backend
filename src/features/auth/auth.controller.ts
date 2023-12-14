import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { LoginAuthDto } from './dto/login-auth.dto';
import { LoginAuthResponseDto } from './dto/login-auth-response.dto';
import { LoginAuthCommand } from './handlers/login-auth/login-auth.command';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { RefreshAuthCommand } from './handlers/refresh-auth/refresh-auth.command';
import { RefreshAuthResponseDto } from './dto/refresh-auth-response.dto';
import { Either } from '@src/common/lib/either.lib';
import { LogoutAuthCommand } from './handlers/logout-auth/logout-auth.command';

@Controller('auth')
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    const either: Either<HttpException, LoginAuthResponseDto> =
      await this.commandBus.execute(new LoginAuthCommand(loginAuthDto));
    const response = either.fold(
      (error) => {
        throw error;
      },
      (value) => value,
    );
    return new SerializerResponse('login user success', { ...response });
  }

  @Post('refresh')
  async refresh() {
    const either: Either<HttpException, RefreshAuthResponseDto> =
      await this.commandBus.execute(new RefreshAuthCommand({} as any));

    const response = either.fold(
      (error) => {
        throw error;
      },
      (value) => value,
    );
    return new SerializerResponse('refresh token success', { ...response });
  }

  @Get('logout')
  async profile() {
    const either: Either<HttpException, void> = await this.commandBus.execute(
      new LogoutAuthCommand({} as any),
    );
    either.fold(
      (error) => {
        throw error;
      },
      () => null,
    );
    return new SerializerResponse('profile success');
  }
}
