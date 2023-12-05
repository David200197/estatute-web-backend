import { Test, TestingModule } from '@nestjs/testing';
import { ABOUT_US_REPOSITORY_TOKEN } from '../providers/about-us-repository.provider';
import { AboutUsLocalRepository } from '../repositories/about-us-local.repository';
import {
  REMOVE_ABOUT_US_HANDLER_TOKEN,
  RemoveAboutUsHandlerProvider,
} from '../handlers/remove/remove-about-us-handler.provider';
import { RemoveAboutUsHandlerModel } from '../handlers/remove/remove-about-us-handler.model';

describe('RemoveAboutUsHandler', () => {
  let handler: RemoveAboutUsHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveAboutUsHandlerProvider,
        {
          provide: ABOUT_US_REPOSITORY_TOKEN,
          useClass: AboutUsLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<RemoveAboutUsHandlerModel>(
      REMOVE_ABOUT_US_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
