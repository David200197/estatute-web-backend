import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateAboutUsCommand } from './update-about-us.command';
import { AboutUsRepositoryModel } from '../../models/about-us-repository.model';
import { UpdateAboutUsHandlerModel } from './update-about-us-handler.model';
import { Inject } from '@nestjs/common';
import { ABOUT_US_REPOSITORY_TOKEN } from '../../providers/about-us-repository.provider';
import { AboutUsModel } from '../../models/about-us.model';

@CommandHandler(UpdateAboutUsCommand)
export class UpdateAboutUsHandler
  implements UpdateAboutUsHandlerModel, ICommandHandler<UpdateAboutUsCommand>
{
  constructor(
    @Inject(ABOUT_US_REPOSITORY_TOKEN)
    private aboutUsRepository: AboutUsRepositoryModel,
  ) {}

  async execute({
    filter,
    updateAboutUsDto,
  }: UpdateAboutUsCommand): Promise<AboutUsModel> {
    return this.aboutUsRepository.updateOne(filter, updateAboutUsDto);
  }
}
