import { Test, TestingModule } from '@nestjs/testing';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../providers/social-networks-repository.provider';
import { SocialNetworksLocalRepository } from '../repositories/social-networks-local.repository';
import {
  UPDATE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  UpdateSocialNetworksHandlerProvider,
} from '../handlers/update/update-social-networks-handler.provider';
import { UpdateSocialNetworksHandlerModel } from '../handlers/update/update-social-networks-handler.model';

describe('UpdateSocialNetworksHandler', () => {
  let handler: UpdateSocialNetworksHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateSocialNetworksHandlerProvider,
        {
          provide: SOCIAL_NETWORKS_REPOSITORY_TOKEN,
          useClass: SocialNetworksLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<UpdateSocialNetworksHandlerModel>(
      UPDATE_SOCIAL_NETWORKS_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
