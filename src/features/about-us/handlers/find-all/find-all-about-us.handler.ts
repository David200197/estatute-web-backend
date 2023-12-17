import { QueryHandler } from '@nestjs/cqrs';
import { FindAllAboutUsQuery } from './find-all-about-us.query';
import { AboutUsRepositoryModel } from '../../models/about-us-repository.model';
import { FindAllAboutUsHandlerModel } from './find-all-about-us-handler.model';
import { Inject } from '@nestjs/common';
import { ABOUT_US_REPOSITORY_TOKEN } from '../../providers/about-us-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AllAboutUsModel } from '../../models/all-about-us.model';

@QueryHandler(FindAllAboutUsQuery)
export class FindAllAboutUsHandler implements FindAllAboutUsHandlerModel {
  constructor(
    @Inject(ABOUT_US_REPOSITORY_TOKEN)
    private aboutUsRepository: AboutUsRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllAboutUsQuery): Promise<ResponseWithPaginate<AllAboutUsModel>> {
    return await this.aboutUsRepository.findAll(filter, options);
  }
}
