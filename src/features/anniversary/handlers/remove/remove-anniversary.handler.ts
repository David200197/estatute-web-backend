import { CommandHandler } from '@nestjs/cqrs';
import { RemoveAnniversaryCommand } from './remove-anniversary.command';
import { AnniversaryRepositoryModel } from '../../models/anniversary-repository.model';
import { RemoveAnniversaryHandlerModel } from './remove-anniversary-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../../providers/anniversary-repository.provider';
import { AnniversaryModel } from '../../models/anniversary.model';
import { AnniversaryNotFoundException } from '../../exceptions/anniversary-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(RemoveAnniversaryCommand)
export class RemoveAnniversaryHandler implements RemoveAnniversaryHandlerModel {
  constructor(
    @Inject(ANNIVERSARY_REPOSITORY_TOKEN)
    private anniversaryRepository: AnniversaryRepositoryModel,
  ) {}

  async execute({
    filter,
  }: RemoveAnniversaryCommand): Promise<
    Either<HttpException, AnniversaryModel>
  > {
    const anniversary = await this.anniversaryRepository.removeOne(filter);
    if (!anniversary) return Either.left(new AnniversaryNotFoundException());
    return Either.right(anniversary);
  }
}
