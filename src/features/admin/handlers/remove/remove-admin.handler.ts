import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveAdminCommand } from './remove-admin.command';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { RemoveAdminHandlerModel } from './remove-admin-handler.model';
import { Inject } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';

@CommandHandler(RemoveAdminCommand)
export class RemoveAdminHandler
  implements RemoveAdminHandlerModel, ICommandHandler<RemoveAdminCommand>
{
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
  ) {}

  execute({ filter }: RemoveAdminCommand): Promise<AdminModel> {
    return this.adminRepository.removeOne(filter);
  }
}
