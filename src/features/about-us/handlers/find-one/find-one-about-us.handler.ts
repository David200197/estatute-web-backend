import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindOneAboutUsQuery } from './find-one-about-us.query';
import { AboutUsRepositoryModel } from '../../models/about-us-repository.model';
import { FindOneAboutUsHandlerModel } from './find-one-about-us-handler.model';
import { Inject } from '@nestjs/common';
import { ABOUT_US_REPOSITORY_TOKEN } from '../../providers/about-us-repository.provider';
import { AboutUsModel } from '../../models/about-us.model';
import { Maybe } from '@src/common/lib/maybe.lib';

@QueryHandler(FindOneAboutUsQuery)
export class FindOneAboutUsHandler
  implements FindOneAboutUsHandlerModel, IQueryHandler<FindOneAboutUsQuery>
{
  constructor(
    @Inject(ABOUT_US_REPOSITORY_TOKEN)
    private aboutUsRepository: AboutUsRepositoryModel,
  ) {}

  async execute({ filter }: FindOneAboutUsQuery): Promise<Maybe<AboutUsModel>> {
    const aboutUs = await this.aboutUsRepository.findOne(filter);
    return Maybe.fromValue(aboutUs);
  }
}
