import { Test, TestingModule } from '@nestjs/testing';
import { SOCIAL_NETWORK_REPOSITORY_TOKEN } from '../providers/social-network-repository.provider';
import { SocialNetworkLocalRepository } from '../repositories/social-network-local.repository';
import {
  UPDATE_SOCIAL_NETWORK_HANDLER_TOKEN,
  UpdateSocialNetworkHandlerProvider,
} from '../handlers/update/update-social-network-handler.provider';
import { UpdateSocialNetworkHandlerModel } from '../handlers/update/update-social-network-handler.model';

describe('UpdateSocialNetworkHandler', () => {
  let handler: UpdateSocialNetworkHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateSocialNetworkHandlerProvider,
        {
          provide: SOCIAL_NETWORK_REPOSITORY_TOKEN,
          useClass: SocialNetworkLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<UpdateSocialNetworkHandlerModel>(
      UPDATE_SOCIAL_NETWORK_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
