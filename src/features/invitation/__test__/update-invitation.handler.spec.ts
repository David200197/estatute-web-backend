import { Test, TestingModule } from '@nestjs/testing';
import { INVITATION_REPOSITORY_TOKEN } from '../providers/invitation-repository.provider';
import { InvitationLocalRepository } from '../repositories/invitation-local.repository';
import {
  UPDATE_INVITATION_HANDLER_TOKEN,
  UpdateInvitationHandlerProvider,
} from '../handlers/update/update-invitation-handler.provider';
import { UpdateInvitationHandlerModel } from '../handlers/update/update-invitation-handler.model';

describe('UpdateInvitationHandler', () => {
  let handler: UpdateInvitationHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateInvitationHandlerProvider,
        {
          provide: INVITATION_REPOSITORY_TOKEN,
          useClass: InvitationLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<UpdateInvitationHandlerModel>(
      UPDATE_INVITATION_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
