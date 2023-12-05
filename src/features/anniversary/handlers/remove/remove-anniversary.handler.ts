import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveAnniversaryCommand } from './remove-anniversary.command';
import { AnniversaryRepositoryModel } from '../../models/anniversary-repository.model';
import { RemoveAnniversaryHandlerModel } from './remove-anniversary-handler.model';
import { Inject } from '@nestjs/common';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../../providers/anniversary-repository.provider';
import { AnniversaryModel } from '../../models/anniversary.model';

@CommandHandler(RemoveAnniversaryCommand)
export class RemoveAnniversaryHandler
  implements
    RemoveAnniversaryHandlerModel,
    ICommandHandler<RemoveAnniversaryCommand>
{
  constructor(
    @Inject(ANNIVERSARY_REPOSITORY_TOKEN)
    private anniversaryRepository: AnniversaryRepositoryModel,
  ) {}

  execute({ filter }: RemoveAnniversaryCommand): Promise<AnniversaryModel> {
    return this.anniversaryRepository.removeOne(filter);
  }
}
