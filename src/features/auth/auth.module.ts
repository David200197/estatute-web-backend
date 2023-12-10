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
import { HashPasswordModule } from '@src/shared/hash-password/hash-password.module';
import { EventEmitterModule } from '@src/shared/event-emitter/event-emitter.module';

@Module({
  imports: [
    CqrsModule,
    JwtModule.register({}),
    HashPasswordModule,
    EventEmitterModule,
  ],
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
