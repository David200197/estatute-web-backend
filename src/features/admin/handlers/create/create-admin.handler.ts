import { CommandHandler } from '@nestjs/cqrs';
import { CreateAdminCommand } from './create-admin.command';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { CreateAdminHandlerModel } from './create-admin-handler.model';
import { HttpException, Inject } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';
import { HASH_PASSWORD_SERVICE_TOKEN } from '@src/shared/hash-password/hash-password-service.provider';
import { HashPasswordServiceModel } from '@src/shared/hash-password/hash-password-helper.service';
import { Either } from '@src/common/lib/either.lib';
import { AdminConflictException } from '../../exceptions/admin-conflict.exception';

@CommandHandler(CreateAdminCommand)
export class CreateAdminHandler implements CreateAdminHandlerModel {
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
    @Inject(HASH_PASSWORD_SERVICE_TOKEN)
    private readonly hashPasswordService: HashPasswordServiceModel,
  ) {}

  async execute({
    createAdminDto,
  }: CreateAdminCommand): Promise<Either<HttpException, AdminModel>> {
    const { password, username } = createAdminDto;
    const findAdmin = await this.adminRepository.findOne({ username });
    if (findAdmin) return Either.left(new AdminConflictException());
    const hashedPassword = await this.hashPasswordService.hash(password);
    const admin = await this.adminRepository.create({
      username,
      password: hashedPassword,
    });
    return Either.right(admin);
  }
}
