import { Test, TestingModule } from '@nestjs/testing';
import { SOCIAL_NETWORK_REPOSITORY_TOKEN } from '../providers/social-network-repository.provider';
import { SocialNetworkLocalRepository } from '../repositories/social-network-local.repository';
import {
  CREATE_SOCIAL_NETWORK_HANDLER_TOKEN,
  CreateSocialNetworkHandlerProvider,
} from '../handlers/create/create-social-network-handler.provider';
import { CreateSocialNetworkHandlerModel } from '../handlers/create/create-social-network-handler.model';

describe('CreateSocialNetworkHandler', () => {
  let handler: CreateSocialNetworkHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateSocialNetworkHandlerProvider,
        {
          provide: SOCIAL_NETWORK_REPOSITORY_TOKEN,
          useClass: SocialNetworkLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<CreateSocialNetworkHandlerModel>(
      CREATE_SOCIAL_NETWORK_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
