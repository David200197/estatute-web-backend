import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindOneAnniversaryQuery } from './find-one-anniversary.query';
import { AnniversaryRepositoryModel } from '../../models/anniversary-repository.model';
import { FindOneAnniversaryHandlerModel } from './find-one-anniversary-handler.model';
import { Inject } from '@nestjs/common';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../../providers/anniversary-repository.provider';
import { AnniversaryModel } from '../../models/anniversary.model';
import { Maybe } from '@src/common/lib/maybe.lib';

@QueryHandler(FindOneAnniversaryQuery)
export class FindOneAnniversaryHandler
  implements
    FindOneAnniversaryHandlerModel,
    IQueryHandler<FindOneAnniversaryQuery>
{
  constructor(
    @Inject(ANNIVERSARY_REPOSITORY_TOKEN)
    private anniversaryRepository: AnniversaryRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneAnniversaryQuery): Promise<Maybe<AnniversaryModel>> {
    const anniversary = await this.anniversaryRepository.findOne(filter);
    return Maybe.fromValue(anniversary);
  }
}
