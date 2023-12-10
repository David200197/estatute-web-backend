import { QueryHandler } from '@nestjs/cqrs';
import { FindOneAnniversaryQuery } from './find-one-anniversary.query';
import { AnniversaryRepositoryModel } from '../../models/anniversary-repository.model';
import { FindOneAnniversaryHandlerModel } from './find-one-anniversary-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../../providers/anniversary-repository.provider';
import { AnniversaryModel } from '../../models/anniversary.model';
import { AnniversaryNotFoundException } from '../../exceptions/anniversary-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@QueryHandler(FindOneAnniversaryQuery)
export class FindOneAnniversaryHandler
  implements FindOneAnniversaryHandlerModel
{
  constructor(
    @Inject(ANNIVERSARY_REPOSITORY_TOKEN)
    private anniversaryRepository: AnniversaryRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneAnniversaryQuery): Promise<
    Either<HttpException, AnniversaryModel>
  > {
    const anniversary = await this.anniversaryRepository.findOne(filter);
    if (!anniversary) return Either.left(new AnniversaryNotFoundException());
    return Either.right(anniversary);
  }
}
