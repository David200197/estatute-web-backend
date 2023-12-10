import { QueryHandler } from '@nestjs/cqrs';
import { FindOneAboutUsQuery } from './find-one-about-us.query';
import { AboutUsRepositoryModel } from '../../models/about-us-repository.model';
import { FindOneAboutUsHandlerModel } from './find-one-about-us-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { ABOUT_US_REPOSITORY_TOKEN } from '../../providers/about-us-repository.provider';
import { AboutUsModel } from '../../models/about-us.model';
import { AboutUsNotFoundException } from '../../exceptions/about-us-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@QueryHandler(FindOneAboutUsQuery)
export class FindOneAboutUsHandler implements FindOneAboutUsHandlerModel {
  constructor(
    @Inject(ABOUT_US_REPOSITORY_TOKEN)
    private aboutUsRepository: AboutUsRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneAboutUsQuery): Promise<Either<HttpException, AboutUsModel>> {
    const aboutUs = await this.aboutUsRepository.findOne(filter);
    if (!aboutUs) return Either.left(new AboutUsNotFoundException());
    return Either.right(aboutUs);
  }
}
