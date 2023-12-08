import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthController } from './auth.controller';
import { AuthCron } from './auth.cron';
import { AuthListener } from './auth.listener';
import { LoginAuthHandlerProvider } from './handlers/login-auth/login-auth-handler.provider';
import { RefreshAuthHandlerProvider } from './handlers/refresh-auth/refresh-auth-handler.provider';
import { AccessTokenStrategy } from './strategy/access-token.strategy';
import { RefreshTokenStrategy } from './strategy/refresh-token.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [CqrsModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthListener,
    AuthCron,
    LoginAuthHandlerProvider,
    RefreshAuthHandlerProvider,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class AuthModule {}
