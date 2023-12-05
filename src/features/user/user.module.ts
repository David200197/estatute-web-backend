import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserRepositoryProvider } from './providers/user-repository.provider';
import { UserController } from './user.controller';
import { UserCron } from './user.cron';
import { UserListener } from './user.listener';
import { FindAllUserHandlerProvider } from './handlers/find-all/find-all-user-handler.provider';
import { CreateUserHandlerProvider } from './handlers/create/create-user-handler.provider';
import { FindOneUserHandlerProvider } from './handlers/find-one/find-one-user-handler.provider';
import { UpdateUserHandlerProvider } from './handlers/update/update-user-handler.provider';
import { RemoveUserHandlerProvider } from './handlers/remove/remove-user-handler.provider';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [
    UserRepositoryProvider,
    FindAllUserHandlerProvider,
    CreateUserHandlerProvider,
    FindOneUserHandlerProvider,
    UpdateUserHandlerProvider,
    RemoveUserHandlerProvider,
    UserListener,
    UserCron,
  ],
})
export class UserModule {}
