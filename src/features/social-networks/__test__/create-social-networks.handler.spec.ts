import { Test, TestingModule } from '@nestjs/testing';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../providers/social-networks-repository.provider';
import { SocialNetworksLocalRepository } from '../repositories/social-networks-local.repository';
import {
  CREATE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  CreateSocialNetworksHandlerProvider,
} from '../handlers/create/create-social-networks-handler.provider';
import { CreateSocialNetworksHandlerModel } from '../handlers/create/create-social-networks-handler.model';

describe('CreateSocialNetworksHandler', () => {
  let handler: CreateSocialNetworksHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateSocialNetworksHandlerProvider,
        {
          provide: SOCIAL_NETWORKS_REPOSITORY_TOKEN,
          useClass: SocialNetworksLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<CreateSocialNetworksHandlerModel>(
      CREATE_SOCIAL_NETWORKS_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
