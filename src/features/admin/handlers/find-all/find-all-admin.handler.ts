import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindAllAdminQuery } from './find-all-admin.query';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { FindAllAdminHandlerModel } from './find-all-admin-handler.model';
import { Inject } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AdminsModel } from '../../models/admins.model';

@QueryHandler(FindAllAdminQuery)
export class FindAllAdminHandler
  implements FindAllAdminHandlerModel, IQueryHandler<FindAllAdminQuery>
{
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllAdminQuery): Promise<ResponseWithPaginate<AdminsModel>> {
    return await this.adminRepository.findAll(filter, options);
  }
}
