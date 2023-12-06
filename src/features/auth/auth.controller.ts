import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { LoginAuthDto } from './dto/login-auth.dto';
import { LoginAuthResponseDto } from './dto/login-auth-response.dto';
import { LoginAuthCommand } from './handlers/login-auth/login-auth.command';
import { SerializerResponse } from '@src/common/lib/response.lib';
import { RefreshAuthCommand } from './handlers/refresh-auth/refresh-auth.command';
import { RefreshAuthResponseDto } from './dto/refresh-auth-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    const login: LoginAuthResponseDto = await this.commandBus.execute(
      new LoginAuthCommand(loginAuthDto),
    );
    return new SerializerResponse('login user success', { ...login });
  }

  @Post('refresh')
  async refresh() {
    // TODO: get the authenticate jwt user
    const refresh: RefreshAuthResponseDto = await this.commandBus.execute(
      new RefreshAuthCommand({} as any),
    );
    return new SerializerResponse('refresh token success', { ...refresh });
  }
}
