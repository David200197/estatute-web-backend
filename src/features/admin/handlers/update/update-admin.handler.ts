import { CommandHandler } from '@nestjs/cqrs';
import { UpdateAdminCommand } from './update-admin.command';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { UpdateAdminHandlerModel } from './update-admin-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';
import { AdminNotFoundException } from '../../exceptions/admin-not-found.exception';
import { Either } from '@src/common/lib/either.lib';
import { HASH_PASSWORD_SERVICE_TOKEN } from '@src/shared/hash-password/hash-password-service.provider';
import { HashPasswordServiceModel } from '@src/shared/hash-password/hash-password-service.model';

@CommandHandler(UpdateAdminCommand)
export class UpdateAdminHandler implements UpdateAdminHandlerModel {
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
    @Inject(HASH_PASSWORD_SERVICE_TOKEN)
    private readonly hashPasswordService: HashPasswordServiceModel,
  ) {}

  async execute({
    filter,
    updateAdminDto,
  }: UpdateAdminCommand): Promise<Either<HttpException, AdminModel>> {
    const { password, username, refreshToken } = updateAdminDto;
    const findAdmin = await this.adminRepository.findOne(updateAdminDto);
    if (findAdmin) return Either.left(new AdminNotFoundException());
    let hashedPassword: string;
    if (password)
      hashedPassword = await this.hashPasswordService.hash(password);
    const admin = await this.adminRepository.updateOne(filter, {
      username,
      refreshToken,
      password: hashedPassword,
    });
    if (!admin) return Either.left(new AdminNotFoundException());
    return Either.right(admin);
  }
}
