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
import { AccessTokenAuth } from '@src/common/decorator/access-token-auth.decorator';
import { RefreshTokenAuth } from '@src/common/decorator/refresh-token-auth.decorator';
import { GetRefreshToken } from '@src/common/decorator/get-refresh-token';
import { AdminModel } from '../admin/models/admin.model';
import { GetAdmin } from '@src/common/decorator/get-admin';
import { AdminNotFoundException } from '../admin/exceptions/admin-not-found.exception';
import { AdminUnauthorizedException } from '../admin/exceptions/admin-unauthorized.exception';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    const either: Either<HttpException, LoginAuthResponseDto> =
      await this.commandBus.execute(new LoginAuthCommand(loginAuthDto));
    const response = either.fold(
      (error) => {
        if (error instanceof AdminNotFoundException)
          throw new AdminUnauthorizedException();
        throw error;
      },
      (value) => value,
    );
    return new SerializerResponse('login user success', { ...response });
  }

  @RefreshTokenAuth()
  @ApiBearerAuth()
  @Post('refresh')
  async refresh(
    @GetRefreshToken() refreshToken: string,
    @GetAdmin() admin: AdminModel,
  ) {
    const either: Either<HttpException, RefreshAuthResponseDto> =
      await this.commandBus.execute(
        new RefreshAuthCommand({ admin, refreshToken }),
      );

    const response = either.fold(
      (error) => {
        throw error;
      },
      (value) => value,
    );
    return new SerializerResponse('refresh token success', { ...response });
  }

  @ApiBearerAuth()
  @AccessTokenAuth()
  @Post('logout')
  async logout(@GetAdmin() admin: AdminModel) {
    const either: Either<HttpException, void> = await this.commandBus.execute(
      new LogoutAuthCommand({ admin }),
    );
    either.fold(
      (error) => {
        throw error;
      },
      () => null,
    );
    return new SerializerResponse('logout user success');
  }

  @ApiBearerAuth()
  @AccessTokenAuth()
  @Get('profile')
  async profile(@GetAdmin() admin: AdminModel) {
    return new SerializerResponse('profile user success', {
      admin: admin.toObject(),
    });
  }
}
