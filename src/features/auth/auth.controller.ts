import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { LoginAuthDto } from './dto/login-auth.dto';
import { LoginAuthResponseDto } from './dto/login-auth-response.dto';
import { LoginAuthCommand } from './handlers/login-auth/login-auth.command';
import { SerializerResponse } from '@src/common/lib/response.lib';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    const login: LoginAuthResponseDto = await this.commandBus.execute(
      new LoginAuthCommand(loginAuthDto),
    );
    return new SerializerResponse('auth was created', { ...login });
  }
}
