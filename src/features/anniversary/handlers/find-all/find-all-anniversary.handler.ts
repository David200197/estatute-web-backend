import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindAllAnniversaryQuery } from './find-all-anniversary.query';
import { AnniversaryRepositoryModel } from '../../models/anniversary-repository.model';
import { FindAllAnniversaryHandlerModel } from './find-all-anniversary-handler.model';
import { Inject } from '@nestjs/common';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../../providers/anniversary-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AnniversarysModel } from '../../models/anniversarys.model';

@QueryHandler(FindAllAnniversaryQuery)
export class FindAllAnniversaryHandler
  implements
    FindAllAnniversaryHandlerModel,
    IQueryHandler<FindAllAnniversaryQuery>
{
  constructor(
    @Inject(ANNIVERSARY_REPOSITORY_TOKEN)
    private anniversaryRepository: AnniversaryRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllAnniversaryQuery): Promise<
    ResponseWithPaginate<AnniversarysModel>
  > {
    return await this.anniversaryRepository.findAll(filter, options);
  }
}
