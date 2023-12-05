import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindAllStatuteQuery } from './find-all-statute.query';
import { StatuteRepositoryModel } from '../../models/statute-repository.model';
import { FindAllStatuteHandlerModel } from './find-all-statute-handler.model';
import { Inject } from '@nestjs/common';
import { STATUTE_REPOSITORY_TOKEN } from '../../providers/statute-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { StatutesModel } from '../../models/statutes.model';

@QueryHandler(FindAllStatuteQuery)
export class FindAllStatuteHandler
  implements FindAllStatuteHandlerModel, IQueryHandler<FindAllStatuteQuery>
{
  constructor(
    @Inject(STATUTE_REPOSITORY_TOKEN)
    private statuteRepository: StatuteRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllStatuteQuery): Promise<ResponseWithPaginate<StatutesModel>> {
    return await this.statuteRepository.findAll(filter, options);
  }
}
