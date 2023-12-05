import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindAllAuthQuery } from './find-all-auth.query';
import { AuthRepositoryModel } from '../../models/auth-repository.model';
import { FindAllAuthHandlerModel } from './find-all-auth-handler.model';
import { Inject } from '@nestjs/common';
import { AUTH_REPOSITORY_TOKEN } from '../../providers/auth-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AuthsModel } from '../../models/auths.model';

@QueryHandler(FindAllAuthQuery)
export class FindAllAuthHandler
  implements FindAllAuthHandlerModel, IQueryHandler<FindAllAuthQuery>
{
  constructor(
    @Inject(AUTH_REPOSITORY_TOKEN)
    private authRepository: AuthRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllAuthQuery): Promise<ResponseWithPaginate<AuthsModel>> {
    return await this.authRepository.findAll(filter, options);
  }
}
