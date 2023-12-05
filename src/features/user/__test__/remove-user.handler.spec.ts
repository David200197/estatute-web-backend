import { Test, TestingModule } from '@nestjs/testing';
import { USER_REPOSITORY_TOKEN } from '../providers/user-repository.provider';
import { UserLocalRepository } from '../repositories/user-local.repository';
import {
  REMOVE_USER_HANDLER_TOKEN,
  RemoveUserHandlerProvider,
} from '../handlers/remove/remove-user-handler.provider';
import { RemoveUserHandlerModel } from '../handlers/remove/remove-user-handler.model';

describe('RemoveUserHandler', () => {
  let handler: RemoveUserHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveUserHandlerProvider,
        { provide: USER_REPOSITORY_TOKEN, useClass: UserLocalRepository },
      ],
    }).compile();

    handler = module.get<RemoveUserHandlerModel>(REMOVE_USER_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
