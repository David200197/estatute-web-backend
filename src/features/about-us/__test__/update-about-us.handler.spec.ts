import { Test, TestingModule } from '@nestjs/testing';
import { ABOUT_US_REPOSITORY_TOKEN } from '../providers/about-us-repository.provider';
import { AboutUsLocalRepository } from '../repositories/about-us-local.repository';
import {
  UPDATE_ABOUT_US_HANDLER_TOKEN,
  UpdateAboutUsHandlerProvider,
} from '../handlers/update/update-about-us-handler.provider';
import { UpdateAboutUsHandlerModel } from '../handlers/update/update-about-us-handler.model';

describe('UpdateAboutUsHandler', () => {
  let handler: UpdateAboutUsHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateAboutUsHandlerProvider,
        {
          provide: ABOUT_US_REPOSITORY_TOKEN,
          useClass: AboutUsLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<UpdateAboutUsHandlerModel>(
      UPDATE_ABOUT_US_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
