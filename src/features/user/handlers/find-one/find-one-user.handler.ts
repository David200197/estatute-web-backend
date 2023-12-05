import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindOneUserQuery } from './find-one-user.query';
import { UserRepositoryModel } from '../../models/user-repository.model';
import { FindOneUserHandlerModel } from './find-one-user-handler.model';
import { Inject } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../../providers/user-repository.provider';
import { UserModel } from '../../models/user.model';
import { Maybe } from '@src/common/lib/maybe.lib';

@QueryHandler(FindOneUserQuery)
export class FindOneUserHandler
  implements FindOneUserHandlerModel, IQueryHandler<FindOneUserQuery>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private userRepository: UserRepositoryModel,
  ) {}

  async execute({ filter }: FindOneUserQuery): Promise<Maybe<UserModel>> {
    const user = await this.userRepository.findOne(filter);
    return Maybe.fromValue(user);
  }
}
