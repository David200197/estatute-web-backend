import { Test, TestingModule } from '@nestjs/testing';
import { USER_REPOSITORY_TOKEN } from '../providers/user-repository.provider';
import { UserLocalRepository } from '../repositories/user-local.repository';
import {
  UPDATE_USER_HANDLER_TOKEN,
  UpdateUserHandlerProvider,
} from '../handlers/update/update-user-handler.provider';
import { UpdateUserHandlerModel } from '../handlers/update/update-user-handler.model';

describe('UpdateUserHandler', () => {
  let handler: UpdateUserHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateUserHandlerProvider,
        { provide: USER_REPOSITORY_TOKEN, useClass: UserLocalRepository },
      ],
    }).compile();

    handler = module.get<UpdateUserHandlerModel>(UPDATE_USER_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
