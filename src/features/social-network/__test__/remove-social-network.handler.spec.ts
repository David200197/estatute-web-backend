import { Test, TestingModule } from '@nestjs/testing';
import { SOCIAL_NETWORK_REPOSITORY_TOKEN } from '../providers/social-network-repository.provider';
import { SocialNetworkLocalRepository } from '../repositories/social-network-local.repository';
import {
  REMOVE_SOCIAL_NETWORK_HANDLER_TOKEN,
  RemoveSocialNetworkHandlerProvider,
} from '../handlers/remove/remove-social-network-handler.provider';
import { RemoveSocialNetworkHandlerModel } from '../handlers/remove/remove-social-network-handler.model';

describe('RemoveSocialNetworkHandler', () => {
  let handler: RemoveSocialNetworkHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveSocialNetworkHandlerProvider,
        {
          provide: SOCIAL_NETWORK_REPOSITORY_TOKEN,
          useClass: SocialNetworkLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<RemoveSocialNetworkHandlerModel>(
      REMOVE_SOCIAL_NETWORK_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
