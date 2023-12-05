import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateStatuteCommand } from './update-statute.command';
import { StatuteRepositoryModel } from '../../models/statute-repository.model';
import { UpdateStatuteHandlerModel } from './update-statute-handler.model';
import { Inject } from '@nestjs/common';
import { STATUTE_REPOSITORY_TOKEN } from '../../providers/statute-repository.provider';
import { StatuteModel } from '../../models/statute.model';

@CommandHandler(UpdateStatuteCommand)
export class UpdateStatuteHandler
  implements UpdateStatuteHandlerModel, ICommandHandler<UpdateStatuteCommand>
{
  constructor(
    @Inject(STATUTE_REPOSITORY_TOKEN)
    private statuteRepository: StatuteRepositoryModel,
  ) {}

  async execute({
    filter,
    updateStatuteDto,
  }: UpdateStatuteCommand): Promise<StatuteModel> {
    return this.statuteRepository.updateOne(filter, updateStatuteDto);
  }
}
