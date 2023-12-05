import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindOneAdminQuery } from './find-one-admin.query';
import { AdminRepositoryModel } from '../../models/admin-repository.model';
import { FindOneAdminHandlerModel } from './find-one-admin-handler.model';
import { Inject } from '@nestjs/common';
import { ADMIN_REPOSITORY_TOKEN } from '../../providers/admin-repository.provider';
import { AdminModel } from '../../models/admin.model';
import { Maybe } from '@src/common/lib/maybe.lib';

@QueryHandler(FindOneAdminQuery)
export class FindOneAdminHandler
  implements FindOneAdminHandlerModel, IQueryHandler<FindOneAdminQuery>
{
  constructor(
    @Inject(ADMIN_REPOSITORY_TOKEN)
    private adminRepository: AdminRepositoryModel,
  ) {}

  async execute({ filter }: FindOneAdminQuery): Promise<Maybe<AdminModel>> {
    const admin = await this.adminRepository.findOne(filter);
    return Maybe.fromValue(admin);
  }
}
