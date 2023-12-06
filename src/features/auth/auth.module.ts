import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthController } from './auth.controller';
import { AuthCron } from './auth.cron';
import { AuthListener } from './auth.listener';
import { LoginAuthHandlerProvider } from './handlers/login-auth/login-auth-handler.provider';

@Module({
  imports: [CqrsModule],
  controllers: [AuthController],
  providers: [AuthListener, AuthCron, LoginAuthHandlerProvider],
})
export class AuthModule {}
