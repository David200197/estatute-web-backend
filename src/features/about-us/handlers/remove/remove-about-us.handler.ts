import { CommandHandler } from '@nestjs/cqrs';
import { RemoveAboutUsCommand } from './remove-about-us.command';
import { AboutUsRepositoryModel } from '../../models/about-us-repository.model';
import { RemoveAboutUsHandlerModel } from './remove-about-us-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { ABOUT_US_REPOSITORY_TOKEN } from '../../providers/about-us-repository.provider';
import { AboutUsModel } from '../../models/about-us.model';
import { AboutUsNotFoundException } from '../../exceptions/about-us-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(RemoveAboutUsCommand)
export class RemoveAboutUsHandler implements RemoveAboutUsHandlerModel {
  constructor(
    @Inject(ABOUT_US_REPOSITORY_TOKEN)
    private aboutUsRepository: AboutUsRepositoryModel,
  ) {}

  async execute({
    filter,
  }: RemoveAboutUsCommand): Promise<Either<HttpException, AboutUsModel>> {
    const aboutUs = await this.aboutUsRepository.removeOne(filter);
    if (!aboutUs) return Either.left(new AboutUsNotFoundException());
    return Either.right(aboutUs);
  }
}
