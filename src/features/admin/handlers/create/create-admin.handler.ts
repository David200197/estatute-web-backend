import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAdminCommand } from './create-admin.command';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { CreateAdminHandlerModel } from './create-admin-handler.model';
import { Inject } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';
import { HashPasswordHelperModel } from '@src/features/utils/hash-password/hash-password-helper.model';
import { HASH_PASSWORD_HELPER_TOKEN } from '@src/features/utils/hash-password/hash-password-helper.provider';

@CommandHandler(CreateAdminCommand)
export class CreateAdminHandler
  implements CreateAdminHandlerModel, ICommandHandler<CreateAdminCommand>
{
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
    @Inject(HASH_PASSWORD_HELPER_TOKEN)
    private readonly hashPassword: HashPasswordHelperModel,
  ) {}

  async execute({ createAdminDto }: CreateAdminCommand): Promise<AdminModel> {
    const hashedPassword = await this.hashPassword.hash(
      createAdminDto.password,
    );
    return this.adminRepository.create({
      ...createAdminDto,
      password: hashedPassword,
    });
  }
}
