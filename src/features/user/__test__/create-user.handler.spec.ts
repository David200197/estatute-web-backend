import { Test, TestingModule } from '@nestjs/testing';
import { USER_REPOSITORY_TOKEN } from '../providers/user-repository.provider';
import { UserLocalRepository } from '../repositories/user-local.repository';
import {
  CREATE_USER_HANDLER_TOKEN,
  CreateUserHandlerProvider,
} from '../handlers/create/create-user-handler.provider';
import { CreateUserHandlerModel } from '../handlers/create/create-user-handler.model';

describe('CreateUserHandler', () => {
  let handler: CreateUserHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserHandlerProvider,
        { provide: USER_REPOSITORY_TOKEN, useClass: UserLocalRepository },
      ],
    }).compile();

    handler = module.get<CreateUserHandlerModel>(CREATE_USER_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
