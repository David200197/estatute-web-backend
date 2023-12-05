import { Test, TestingModule } from '@nestjs/testing';
import { USER_REPOSITORY_TOKEN } from '../providers/user-repository.provider';
import { UserLocalRepository } from '../repositories/user-local.repository';
import {
  FIND_ONE_USER_HANDLER_TOKEN,
  FindOneUserHandlerProvider,
} from '../handlers/find-one/find-one-user-handler.provider';
import { FindOneUserHandlerModel } from '../handlers/find-one/find-one-user-handler.model';

describe('FindOneUserHandler', () => {
  let handler: FindOneUserHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneUserHandlerProvider,
        { provide: USER_REPOSITORY_TOKEN, useClass: UserLocalRepository },
      ],
    }).compile();

    handler = module.get<FindOneUserHandlerModel>(FIND_ONE_USER_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
