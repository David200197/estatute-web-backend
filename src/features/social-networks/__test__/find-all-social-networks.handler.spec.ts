import { Test, TestingModule } from '@nestjs/testing';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../providers/social-networks-repository.provider';
import { SocialNetworksLocalRepository } from '../repositories/social-networks-local.repository';
import {
  FIND_ALL_SOCIAL_NETWORKS_HANDLER_TOKEN,
  FindAllSocialNetworksHandlerProvider,
} from '../handlers/find-all/find-all-social-networks-handler.provider';
import { FindAllSocialNetworksHandlerModel } from '../handlers/find-all/find-all-social-networks-handler.model';

describe('FindAllSocialNetworksHandler', () => {
  let handler: FindAllSocialNetworksHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllSocialNetworksHandlerProvider,
        {
          provide: SOCIAL_NETWORKS_REPOSITORY_TOKEN,
          useClass: SocialNetworksLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<FindAllSocialNetworksHandlerModel>(
      FIND_ALL_SOCIAL_NETWORKS_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
