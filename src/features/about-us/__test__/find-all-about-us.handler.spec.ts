import { Test, TestingModule } from '@nestjs/testing';
import { ABOUT_US_REPOSITORY_TOKEN } from '../providers/about-us-repository.provider';
import { AboutUsLocalRepository } from '../repositories/about-us-local.repository';
import {
  FIND_ALL_ABOUT_US_HANDLER_TOKEN,
  FindAllAboutUsHandlerProvider,
} from '../handlers/find-all/find-all-about-us-handler.provider';
import { FindAllAboutUsHandlerModel } from '../handlers/find-all/find-all-about-us-handler.model';

describe('FindAllAboutUsHandler', () => {
  let handler: FindAllAboutUsHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllAboutUsHandlerProvider,
        {
          provide: ABOUT_US_REPOSITORY_TOKEN,
          useClass: AboutUsLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<FindAllAboutUsHandlerModel>(
      FIND_ALL_ABOUT_US_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
