import { QueryHandler } from '@nestjs/cqrs';
import { FindOneAdminQuery } from './find-one-admin.query';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { FindOneAdminHandlerModel } from './find-one-admin-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';
import { AdminNotFoundException } from '../../exceptions/admin-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@QueryHandler(FindOneAdminQuery)
export class FindOneAdminHandler implements FindOneAdminHandlerModel {
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneAdminQuery): Promise<Either<HttpException, AdminModel>> {
    const admin = await this.adminRepository.findOne(filter);
    if (!admin) return Either.left(new AdminNotFoundException());
    return Either.right(admin);
  }
}
