import { CommandHandler } from '@nestjs/cqrs';
import { RemoveStatuteCommand } from './remove-statute.command';
import { StatuteRepositoryModel } from '../../models/statute-repository.model';
import { RemoveStatuteHandlerModel } from './remove-statute-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { STATUTE_REPOSITORY_TOKEN } from '../../providers/statute-repository.provider';
import { StatuteModel } from '../../models/statute.model';
import { StatuteNotFoundException } from '../../exceptions/statute-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(RemoveStatuteCommand)
export class RemoveStatuteHandler implements RemoveStatuteHandlerModel {
  constructor(
    @Inject(STATUTE_REPOSITORY_TOKEN)
    private statuteRepository: StatuteRepositoryModel,
  ) {}

  async execute({
    filter,
  }: RemoveStatuteCommand): Promise<Either<HttpException, StatuteModel>> {
    const statute = await this.statuteRepository.removeOne(filter);
    if (!statute) return Either.left(new StatuteNotFoundException());
    return Either.right(statute);
  }
}
