import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveStatuteCommand } from './remove-statute.command';
import { StatuteRepositoryModel } from '../../models/statute-repository.model';
import { RemoveStatuteHandlerModel } from './remove-statute-handler.model';
import { Inject } from '@nestjs/common';
import { STATUTE_REPOSITORY_TOKEN } from '../../providers/statute-repository.provider';
import { StatuteModel } from '../../models/statute.model';

@CommandHandler(RemoveStatuteCommand)
export class RemoveStatuteHandler
  implements RemoveStatuteHandlerModel, ICommandHandler<RemoveStatuteCommand>
{
  constructor(
    @Inject(STATUTE_REPOSITORY_TOKEN)
    private statuteRepository: StatuteRepositoryModel,
  ) {}

  execute({ filter }: RemoveStatuteCommand): Promise<StatuteModel> {
    return this.statuteRepository.removeOne(filter);
  }
}
