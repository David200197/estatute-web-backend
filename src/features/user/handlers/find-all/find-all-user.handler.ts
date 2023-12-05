import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindAllUserQuery } from './find-all-user.query';
import { UserRepositoryModel } from '../../models/user-repository.model';
import { FindAllUserHandlerModel } from './find-all-user-handler.model';
import { Inject } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../../providers/user-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { UsersModel } from '../../models/users.model';

@QueryHandler(FindAllUserQuery)
export class FindAllUserHandler
  implements FindAllUserHandlerModel, IQueryHandler<FindAllUserQuery>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private userRepository: UserRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllUserQuery): Promise<ResponseWithPaginate<UsersModel>> {
    return await this.userRepository.findAll(filter, options);
  }
}
