import { Test, TestingModule } from '@nestjs/testing';
import { SOCIAL_NETWORK_REPOSITORY_TOKEN } from '../providers/social-network-repository.provider';
import { SocialNetworkLocalRepository } from '../repositories/social-network-local.repository';
import {
  FIND_ONE_SOCIAL_NETWORK_HANDLER_TOKEN,
  FindOneSocialNetworkHandlerProvider,
} from '../handlers/find-one/find-one-social-network-handler.provider';
import { FindOneSocialNetworkHandlerModel } from '../handlers/find-one/find-one-social-network-handler.model';

describe('FindOneSocialNetworkHandler', () => {
  let handler: FindOneSocialNetworkHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneSocialNetworkHandlerProvider,
        {
          provide: SOCIAL_NETWORK_REPOSITORY_TOKEN,
          useClass: SocialNetworkLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<FindOneSocialNetworkHandlerModel>(
      FIND_ONE_SOCIAL_NETWORK_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
