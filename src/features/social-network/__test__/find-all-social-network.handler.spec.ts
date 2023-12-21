import { Test, TestingModule } from '@nestjs/testing';
import { SOCIAL_NETWORK_REPOSITORY_TOKEN } from '../providers/social-network-repository.provider';
import { SocialNetworkLocalRepository } from '../repositories/social-network-local.repository';
import {
  FIND_ALL_SOCIAL_NETWORK_HANDLER_TOKEN,
  FindAllSocialNetworkHandlerProvider,
} from '../handlers/find-all/find-all-social-network-handler.provider';
import { FindAllSocialNetworkHandlerModel } from '../handlers/find-all/find-all-social-network-handler.model';

describe('FindAllSocialNetworkHandler', () => {
  let handler: FindAllSocialNetworkHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllSocialNetworkHandlerProvider,
        {
          provide: SOCIAL_NETWORK_REPOSITORY_TOKEN,
          useClass: SocialNetworkLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<FindAllSocialNetworkHandlerModel>(
      FIND_ALL_SOCIAL_NETWORK_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
