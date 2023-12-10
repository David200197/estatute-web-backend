import { QueryHandler } from '@nestjs/cqrs';
import { FindOneStatuteQuery } from './find-one-statute.query';
import { StatuteRepositoryModel } from '../../models/statute-repository.model';
import { FindOneStatuteHandlerModel } from './find-one-statute-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { STATUTE_REPOSITORY_TOKEN } from '../../providers/statute-repository.provider';
import { StatuteModel } from '../../models/statute.model';
import { StatuteNotFoundException } from '../../exceptions/statute-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@QueryHandler(FindOneStatuteQuery)
export class FindOneStatuteHandler implements FindOneStatuteHandlerModel {
  constructor(
    @Inject(STATUTE_REPOSITORY_TOKEN)
    private statuteRepository: StatuteRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneStatuteQuery): Promise<Either<HttpException, StatuteModel>> {
    const statute = await this.statuteRepository.findOne(filter);
    if (!statute) return Either.left(new StatuteNotFoundException());
    return Either.right(statute);
  }
}
