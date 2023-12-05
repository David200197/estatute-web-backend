import { Test, TestingModule } from '@nestjs/testing';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../providers/social-networks-repository.provider';
import { SocialNetworksLocalRepository } from '../repositories/social-networks-local.repository';
import {
  REMOVE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  RemoveSocialNetworksHandlerProvider,
} from '../handlers/remove/remove-social-networks-handler.provider';
import { RemoveSocialNetworksHandlerModel } from '../handlers/remove/remove-social-networks-handler.model';

describe('RemoveSocialNetworksHandler', () => {
  let handler: RemoveSocialNetworksHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveSocialNetworksHandlerProvider,
        {
          provide: SOCIAL_NETWORKS_REPOSITORY_TOKEN,
          useClass: SocialNetworksLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<RemoveSocialNetworksHandlerModel>(
      REMOVE_SOCIAL_NETWORKS_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
