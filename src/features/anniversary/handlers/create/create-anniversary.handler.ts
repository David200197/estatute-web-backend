import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAnniversaryCommand } from './create-anniversary.command';
import { AnniversaryRepositoryModel } from '../../models/anniversary-repository.model';
import { CreateAnniversaryHandlerModel } from './create-anniversary-handler.model';
import { Inject } from '@nestjs/common';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../../providers/anniversary-repository.provider';
import { AnniversaryModel } from '../../models/anniversary.model';

@CommandHandler(CreateAnniversaryCommand)
export class CreateAnniversaryHandler
  implements
    CreateAnniversaryHandlerModel,
    ICommandHandler<CreateAnniversaryCommand>
{
  constructor(
    @Inject(ANNIVERSARY_REPOSITORY_TOKEN)
    private anniversaryRepository: AnniversaryRepositoryModel,
  ) {}

  execute({
    createAnniversaryDto,
  }: CreateAnniversaryCommand): Promise<AnniversaryModel> {
    return this.anniversaryRepository.create(createAnniversaryDto);
  }
}
