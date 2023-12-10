import { CommandHandler } from '@nestjs/cqrs';
import { UpdateAdminCommand } from './update-admin.command';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { UpdateAdminHandlerModel } from './update-admin-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';
import { AdminNotFoundException } from '../../exceptions/admin-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(UpdateAdminCommand)
export class UpdateAdminHandler implements UpdateAdminHandlerModel {
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
  ) {}

  async execute({
    filter,
    updateAdminDto,
  }: UpdateAdminCommand): Promise<Either<HttpException, AdminModel>> {
    const admin = await this.adminRepository.updateOne(filter, updateAdminDto);
    if (!admin) return Either.left(new AdminNotFoundException());
    return Either.right(admin);
  }
}
