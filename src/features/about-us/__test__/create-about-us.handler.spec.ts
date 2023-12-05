import { Test, TestingModule } from '@nestjs/testing';
import { ABOUT_US_REPOSITORY_TOKEN } from '../providers/about-us-repository.provider';
import { AboutUsLocalRepository } from '../repositories/about-us-local.repository';
import {
  CREATE_ABOUT_US_HANDLER_TOKEN,
  CreateAboutUsHandlerProvider,
} from '../handlers/create/create-about-us-handler.provider';
import { CreateAboutUsHandlerModel } from '../handlers/create/create-about-us-handler.model';

describe('CreateAboutUsHandler', () => {
  let handler: CreateAboutUsHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateAboutUsHandlerProvider,
        {
          provide: ABOUT_US_REPOSITORY_TOKEN,
          useClass: AboutUsLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<CreateAboutUsHandlerModel>(
      CREATE_ABOUT_US_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
