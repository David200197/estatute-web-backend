import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateAnniversaryCommand } from './update-anniversary.command';
import { AnniversaryRepositoryModel } from '../../models/anniversary-repository.model';
import { UpdateAnniversaryHandlerModel } from './update-anniversary-handler.model';
import { Inject } from '@nestjs/common';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../../providers/anniversary-repository.provider';
import { AnniversaryModel } from '../../models/anniversary.model';

@CommandHandler(UpdateAnniversaryCommand)
export class UpdateAnniversaryHandler
  implements
    UpdateAnniversaryHandlerModel,
    ICommandHandler<UpdateAnniversaryCommand>
{
  constructor(
    @Inject(ANNIVERSARY_REPOSITORY_TOKEN)
    private anniversaryRepository: AnniversaryRepositoryModel,
  ) {}

  async execute({
    filter,
    updateAnniversaryDto,
  }: UpdateAnniversaryCommand): Promise<AnniversaryModel> {
    return this.anniversaryRepository.updateOne(filter, updateAnniversaryDto);
  }
}
