import { Test, TestingModule } from '@nestjs/testing';
import { USER_REPOSITORY_TOKEN } from '../providers/user-repository.provider';
import { UserLocalRepository } from '../repositories/user-local.repository';
import {
  FIND_ALL_USER_HANDLER_TOKEN,
  FindAllUserHandlerProvider,
} from '../handlers/find-all/find-all-user-handler.provider';
import { FindAllUserHandlerModel } from '../handlers/find-all/find-all-user-handler.model';

describe('FindAllUserHandler', () => {
  let handler: FindAllUserHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllUserHandlerProvider,
        { provide: USER_REPOSITORY_TOKEN, useClass: UserLocalRepository },
      ],
    }).compile();

    handler = module.get<FindAllUserHandlerModel>(FIND_ALL_USER_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
