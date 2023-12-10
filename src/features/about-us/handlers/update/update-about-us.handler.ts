import { CommandHandler } from '@nestjs/cqrs';
import { UpdateAboutUsCommand } from './update-about-us.command';
import { AboutUsRepositoryModel } from '../../models/about-us-repository.model';
import { UpdateAboutUsHandlerModel } from './update-about-us-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { ABOUT_US_REPOSITORY_TOKEN } from '../../providers/about-us-repository.provider';
import { AboutUsModel } from '../../models/about-us.model';
import { AboutUsNotFoundException } from '../../exceptions/about-us-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(UpdateAboutUsCommand)
export class UpdateAboutUsHandler implements UpdateAboutUsHandlerModel {
  constructor(
    @Inject(ABOUT_US_REPOSITORY_TOKEN)
    private aboutUsRepository: AboutUsRepositoryModel,
  ) {}

  async execute({
    filter,
    updateAboutUsDto,
  }: UpdateAboutUsCommand): Promise<Either<HttpException, AboutUsModel>> {
    const aboutUs = await this.aboutUsRepository.updateOne(
      filter,
      updateAboutUsDto,
    );
    if (!aboutUs) return Either.left(new AboutUsNotFoundException());
    return Either.right(aboutUs);
  }
}
