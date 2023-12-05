import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAdminCommand } from './create-admin.command';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { CreateAdminHandlerModel } from './create-admin-handler.model';
import { Inject } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';

@CommandHandler(CreateAdminCommand)
export class CreateAdminHandler
  implements CreateAdminHandlerModel, ICommandHandler<CreateAdminCommand>
{
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
  ) {}

  execute({ createAdminDto }: CreateAdminCommand): Promise<AdminModel> {
    return this.adminRepository.create(createAdminDto);
  }
}
