import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AdminRepositoryProvider } from './providers/admin-repository.provider';
import { AdminController } from './admin.controller';
import { AdminCron } from './admin.cron';
import { AdminListener } from './admin.listener';
import { FindAllAdminHandlerProvider } from './handlers/find-all/find-all-admin-handler.provider';
import { CreateAdminHandlerProvider } from './handlers/create/create-admin-handler.provider';
import { FindOneAdminHandlerProvider } from './handlers/find-one/find-one-admin-handler.provider';
import { UpdateAdminHandlerProvider } from './handlers/update/update-admin-handler.provider';
import { RemoveAdminHandlerProvider } from './handlers/remove/remove-admin-handler.provider';
import { HashPasswordHelperProvider } from '../utils/hash-password/hash-password-helper.provider';
import { UtilsModule } from '../utils/utils.module';

@Module({
  imports: [CqrsModule, UtilsModule],
  controllers: [AdminController],
  providers: [
    AdminRepositoryProvider,
    FindAllAdminHandlerProvider,
    CreateAdminHandlerProvider,
    FindOneAdminHandlerProvider,
    UpdateAdminHandlerProvider,
    RemoveAdminHandlerProvider,
    HashPasswordHelperProvider,
    AdminListener,
    AdminCron,
  ],
})
export class AdminModule {}
