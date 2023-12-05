import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindOneAuthQuery } from './find-one-auth.query';
import { AuthRepositoryModel } from '../../models/auth-repository.model';
import { FindOneAuthHandlerModel } from './find-one-auth-handler.model';
import { Inject } from '@nestjs/common';
import { AUTH_REPOSITORY_TOKEN } from '../../providers/auth-repository.provider';
import { AuthModel } from '../../models/auth.model';
import { Maybe } from '@src/common/lib/maybe.lib';

@QueryHandler(FindOneAuthQuery)
export class FindOneAuthHandler
  implements FindOneAuthHandlerModel, IQueryHandler<FindOneAuthQuery>
{
  constructor(
    @Inject(AUTH_REPOSITORY_TOKEN)
    private authRepository: AuthRepositoryModel,
  ) {}

  async execute({ filter }: FindOneAuthQuery): Promise<Maybe<AuthModel>> {
    const auth = await this.authRepository.findOne(filter);
    return Maybe.fromValue(auth);
  }
}
