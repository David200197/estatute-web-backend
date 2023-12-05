import { Test, TestingModule } from '@nestjs/testing';
import { INVITATION_REPOSITORY_TOKEN } from '../providers/invitation-repository.provider';
import { InvitationLocalRepository } from '../repositories/invitation-local.repository';
import {
  CREATE_INVITATION_HANDLER_TOKEN,
  CreateInvitationHandlerProvider,
} from '../handlers/create/create-invitation-handler.provider';
import { CreateInvitationHandlerModel } from '../handlers/create/create-invitation-handler.model';

describe('CreateInvitationHandler', () => {
  let handler: CreateInvitationHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateInvitationHandlerProvider,
        {
          provide: INVITATION_REPOSITORY_TOKEN,
          useClass: InvitationLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<CreateInvitationHandlerModel>(
      CREATE_INVITATION_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
