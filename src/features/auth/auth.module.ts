import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthRepositoryProvider } from './providers/auth-repository.provider';
import { AuthController } from './auth.controller';
import { AuthCron } from './auth.cron';
import { AuthListener } from './auth.listener';
import { FindAllAuthHandlerProvider } from './handlers/find-all/find-all-auth-handler.provider';
import { CreateAuthHandlerProvider } from './handlers/create/create-auth-handler.provider';
import { FindOneAuthHandlerProvider } from './handlers/find-one/find-one-auth-handler.provider';
import { UpdateAuthHandlerProvider } from './handlers/update/update-auth-handler.provider';
import { RemoveAuthHandlerProvider } from './handlers/remove/remove-auth-handler.provider';

@Module({
  imports: [CqrsModule],
  controllers: [AuthController],
  providers: [
    AuthRepositoryProvider,
    FindAllAuthHandlerProvider,
    CreateAuthHandlerProvider,
    FindOneAuthHandlerProvider,
    UpdateAuthHandlerProvider,
    RemoveAuthHandlerProvider,
    AuthListener,
    AuthCron,
  ],
})
export class AuthModule {}
