import { Test, TestingModule } from '@nestjs/testing';
import { INVITATION_REPOSITORY_TOKEN } from '../providers/invitation-repository.provider';
import { InvitationLocalRepository } from '../repositories/invitation-local.repository';
import {
  FIND_ONE_INVITATION_HANDLER_TOKEN,
  FindOneInvitationHandlerProvider,
} from '../handlers/find-one/find-one-invitation-handler.provider';
import { FindOneInvitationHandlerModel } from '../handlers/find-one/find-one-invitation-handler.model';

describe('FindOneInvitationHandler', () => {
  let handler: FindOneInvitationHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneInvitationHandlerProvider,
        {
          provide: INVITATION_REPOSITORY_TOKEN,
          useClass: InvitationLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<FindOneInvitationHandlerModel>(
      FIND_ONE_INVITATION_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
