import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateStatuteCommand } from './create-statute.command';
import { StatuteRepositoryModel } from '../../models/statute-repository.model';
import { CreateStatuteHandlerModel } from './create-statute-handler.model';
import { Inject } from '@nestjs/common';
import { STATUTE_REPOSITORY_TOKEN } from '../../providers/statute-repository.provider';
import { StatuteModel } from '../../models/statute.model';

@CommandHandler(CreateStatuteCommand)
export class CreateStatuteHandler
  implements CreateStatuteHandlerModel, ICommandHandler<CreateStatuteCommand>
{
  constructor(
    @Inject(STATUTE_REPOSITORY_TOKEN)
    private statuteRepository: StatuteRepositoryModel,
  ) {}

  execute({ createStatuteDto }: CreateStatuteCommand): Promise<StatuteModel> {
    return this.statuteRepository.create(createStatuteDto);
  }
}
