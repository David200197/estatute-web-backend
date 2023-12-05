import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindOneStatuteQuery } from './find-one-statute.query';
import { StatuteRepositoryModel } from '../../models/statute-repository.model';
import { FindOneStatuteHandlerModel } from './find-one-statute-handler.model';
import { Inject } from '@nestjs/common';
import { STATUTE_REPOSITORY_TOKEN } from '../../providers/statute-repository.provider';
import { StatuteModel } from '../../models/statute.model';
import { Maybe } from '@src/common/lib/maybe.lib';

@QueryHandler(FindOneStatuteQuery)
export class FindOneStatuteHandler
  implements FindOneStatuteHandlerModel, IQueryHandler<FindOneStatuteQuery>
{
  constructor(
    @Inject(STATUTE_REPOSITORY_TOKEN)
    private statuteRepository: StatuteRepositoryModel,
  ) {}

  async execute({ filter }: FindOneStatuteQuery): Promise<Maybe<StatuteModel>> {
    const statute = await this.statuteRepository.findOne(filter);
    return Maybe.fromValue(statute);
  }
}
