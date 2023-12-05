import { Test, TestingModule } from '@nestjs/testing';
import { ABOUT_US_REPOSITORY_TOKEN } from '../providers/about-us-repository.provider';
import { AboutUsLocalRepository } from '../repositories/about-us-local.repository';
import {
  FIND_ONE_ABOUT_US_HANDLER_TOKEN,
  FindOneAboutUsHandlerProvider,
} from '../handlers/find-one/find-one-about-us-handler.provider';
import { FindOneAboutUsHandlerModel } from '../handlers/find-one/find-one-about-us-handler.model';

describe('FindOneAboutUsHandler', () => {
  let handler: FindOneAboutUsHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneAboutUsHandlerProvider,
        {
          provide: ABOUT_US_REPOSITORY_TOKEN,
          useClass: AboutUsLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<FindOneAboutUsHandlerModel>(
      FIND_ONE_ABOUT_US_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
