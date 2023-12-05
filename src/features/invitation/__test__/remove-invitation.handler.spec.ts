import { Test, TestingModule } from '@nestjs/testing';
import { INVITATION_REPOSITORY_TOKEN } from '../providers/invitation-repository.provider';
import { InvitationLocalRepository } from '../repositories/invitation-local.repository';
import {
  REMOVE_INVITATION_HANDLER_TOKEN,
  RemoveInvitationHandlerProvider,
} from '../handlers/remove/remove-invitation-handler.provider';
import { RemoveInvitationHandlerModel } from '../handlers/remove/remove-invitation-handler.model';

describe('RemoveInvitationHandler', () => {
  let handler: RemoveInvitationHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveInvitationHandlerProvider,
        {
          provide: INVITATION_REPOSITORY_TOKEN,
          useClass: InvitationLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<RemoveInvitationHandlerModel>(
      REMOVE_INVITATION_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
