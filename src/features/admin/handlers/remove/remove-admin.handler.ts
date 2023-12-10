import { CommandHandler } from '@nestjs/cqrs';
import { RemoveAdminCommand } from './remove-admin.command';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { RemoveAdminHandlerModel } from './remove-admin-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';
import { AdminNotFoundException } from '../../exceptions/admin-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(RemoveAdminCommand)
export class RemoveAdminHandler implements RemoveAdminHandlerModel {
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
  ) {}

  async execute({
    filter,
  }: RemoveAdminCommand): Promise<Either<HttpException, AdminModel>> {
    const admin = await this.adminRepository.removeOne(filter);
    if (!admin) return Either.left(new AdminNotFoundException());
    return Either.right(admin);
  }
}
