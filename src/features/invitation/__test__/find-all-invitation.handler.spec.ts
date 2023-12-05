import { Test, TestingModule } from '@nestjs/testing';
import { INVITATION_REPOSITORY_TOKEN } from '../providers/invitation-repository.provider';
import { InvitationLocalRepository } from '../repositories/invitation-local.repository';
import {
  FIND_ALL_INVITATION_HANDLER_TOKEN,
  FindAllInvitationHandlerProvider,
} from '../handlers/find-all/find-all-invitation-handler.provider';
import { FindAllInvitationHandlerModel } from '../handlers/find-all/find-all-invitation-handler.model';

describe('FindAllInvitationHandler', () => {
  let handler: FindAllInvitationHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllInvitationHandlerProvider,
        {
          provide: INVITATION_REPOSITORY_TOKEN,
          useClass: InvitationLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<FindAllInvitationHandlerModel>(
      FIND_ALL_INVITATION_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
