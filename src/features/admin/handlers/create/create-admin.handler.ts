import { CommandHandler } from '@nestjs/cqrs';
import { CreateAdminCommand } from './create-admin.command';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { CreateAdminHandlerModel } from './create-admin-handler.model';
import { Inject } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';
import { HASH_PASSWORD_SERVICE_TOKEN } from '@src/shared/hash-password/hash-password-service.provider';
import { HashPasswordServiceModel } from '@src/shared/hash-password/hash-password-helper.service';

@CommandHandler(CreateAdminCommand)
export class CreateAdminHandler implements CreateAdminHandlerModel {
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
    @Inject(HASH_PASSWORD_SERVICE_TOKEN)
    private readonly hashPasswordService: HashPasswordServiceModel,
  ) {}

  async execute({ createAdminDto }: CreateAdminCommand): Promise<AdminModel> {
    const { password } = createAdminDto;
    const hashedPassword = await this.hashPasswordService.hash(password);
    return this.adminRepository.create({
      ...createAdminDto,
      password: hashedPassword,
    });
  }
}
