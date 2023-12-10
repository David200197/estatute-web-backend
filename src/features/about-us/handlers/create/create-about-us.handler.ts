import { CommandHandler } from '@nestjs/cqrs';
import { CreateAboutUsCommand } from './create-about-us.command';
import { AboutUsRepositoryModel } from '../../models/about-us-repository.model';
import { CreateAboutUsHandlerModel } from './create-about-us-handler.model';
import { Inject } from '@nestjs/common';
import { ABOUT_US_REPOSITORY_TOKEN } from '../../providers/about-us-repository.provider';
import { AboutUsModel } from '../../models/about-us.model';

@CommandHandler(CreateAboutUsCommand)
export class CreateAboutUsHandler implements CreateAboutUsHandlerModel {
  constructor(
    @Inject(ABOUT_US_REPOSITORY_TOKEN)
    private aboutUsRepository: AboutUsRepositoryModel,
  ) {}

  execute({ createAboutUsDto }: CreateAboutUsCommand): Promise<AboutUsModel> {
    return this.aboutUsRepository.create(createAboutUsDto);
  }
}
