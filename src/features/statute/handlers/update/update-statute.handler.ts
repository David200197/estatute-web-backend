import { CommandHandler } from '@nestjs/cqrs';
import { UpdateStatuteCommand } from './update-statute.command';
import { StatuteRepositoryModel } from '../../models/statute-repository.model';
import { UpdateStatuteHandlerModel } from './update-statute-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { STATUTE_REPOSITORY_TOKEN } from '../../providers/statute-repository.provider';
import { StatuteModel } from '../../models/statute.model';
import { StatuteNotFoundException } from '../../exceptions/statute-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(UpdateStatuteCommand)
export class UpdateStatuteHandler implements UpdateStatuteHandlerModel {
  constructor(
    @Inject(STATUTE_REPOSITORY_TOKEN)
    private statuteRepository: StatuteRepositoryModel,
  ) {}

  async execute({
    filter,
    updateStatuteDto,
  }: UpdateStatuteCommand): Promise<Either<HttpException, StatuteModel>> {
    const statute = await this.statuteRepository.updateOne(
      filter,
      updateStatuteDto,
    );
    if (!statute) return Either.left(new StatuteNotFoundException());
    return Either.right(statute);
  }
}
