import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveAboutUsCommand } from './remove-about-us.command';
import { AboutUsRepositoryModel } from '../../models/about-us-repository.model';
import { RemoveAboutUsHandlerModel } from './remove-about-us-handler.model';
import { Inject } from '@nestjs/common';
import { ABOUT_US_REPOSITORY_TOKEN } from '../../providers/about-us-repository.provider';
import { AboutUsModel } from '../../models/about-us.model';

@CommandHandler(RemoveAboutUsCommand)
export class RemoveAboutUsHandler
  implements RemoveAboutUsHandlerModel, ICommandHandler<RemoveAboutUsCommand>
{
  constructor(
    @Inject(ABOUT_US_REPOSITORY_TOKEN)
    private aboutUsRepository: AboutUsRepositoryModel,
  ) {}

  execute({ filter }: RemoveAboutUsCommand): Promise<AboutUsModel> {
    return this.aboutUsRepository.removeOne(filter);
  }
}
