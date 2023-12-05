import { Test, TestingModule } from '@nestjs/testing';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../providers/social-networks-repository.provider';
import { SocialNetworksLocalRepository } from '../repositories/social-networks-local.repository';
import {
  FIND_ONE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  FindOneSocialNetworksHandlerProvider,
} from '../handlers/find-one/find-one-social-networks-handler.provider';
import { FindOneSocialNetworksHandlerModel } from '../handlers/find-one/find-one-social-networks-handler.model';

describe('FindOneSocialNetworksHandler', () => {
  let handler: FindOneSocialNetworksHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneSocialNetworksHandlerProvider,
        {
          provide: SOCIAL_NETWORKS_REPOSITORY_TOKEN,
          useClass: SocialNetworksLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<FindOneSocialNetworksHandlerModel>(
      FIND_ONE_SOCIAL_NETWORKS_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
