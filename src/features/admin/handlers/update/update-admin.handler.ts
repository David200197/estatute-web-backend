import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateAdminCommand } from './update-admin.command';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { UpdateAdminHandlerModel } from './update-admin-handler.model';
import { Inject } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';

@CommandHandler(UpdateAdminCommand)
export class UpdateAdminHandler
  implements UpdateAdminHandlerModel, ICommandHandler<UpdateAdminCommand>
{
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
  ) {}

  async execute({
    filter,
    updateAdminDto,
  }: UpdateAdminCommand): Promise<AdminModel> {
    return this.adminRepository.updateOne(filter, updateAdminDto);
  }
}
