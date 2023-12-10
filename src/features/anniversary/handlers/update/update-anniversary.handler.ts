import { CommandHandler } from '@nestjs/cqrs';
import { UpdateAnniversaryCommand } from './update-anniversary.command';
import { AnniversaryRepositoryModel } from '../../models/anniversary-repository.model';
import { UpdateAnniversaryHandlerModel } from './update-anniversary-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../../providers/anniversary-repository.provider';
import { AnniversaryModel } from '../../models/anniversary.model';
import { AnniversaryNotFoundException } from '../../exceptions/anniversary-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(UpdateAnniversaryCommand)
export class UpdateAnniversaryHandler implements UpdateAnniversaryHandlerModel {
  constructor(
    @Inject(ANNIVERSARY_REPOSITORY_TOKEN)
    private anniversaryRepository: AnniversaryRepositoryModel,
  ) {}

  async execute({
    filter,
    updateAnniversaryDto,
  }: UpdateAnniversaryCommand): Promise<
    Either<HttpException, AnniversaryModel>
  > {
    const anniversary = await this.anniversaryRepository.updateOne(
      filter,
      updateAnniversaryDto,
    );
    if (!anniversary) return Either.left(new AnniversaryNotFoundException());
    return Either.right(anniversary);
  }
}
