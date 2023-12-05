import { Test, TestingModule } from '@nestjs/testing';
import { ADMIN_REPOSITORY_TOKEN } from '../providers/admin-repository.provider';
import { AdminLocalRepository } from '../repositories/admin-local.repository';
import {
  CREATE_ADMIN_HANDLER_TOKEN,
  CreateAdminHandlerProvider,
} from '../handlers/create/create-admin-handler.provider';
import { CreateAdminHandlerModel } from '../handlers/create/create-admin-handler.model';

describe('CreateAdminHandler', () => {
  let handler: CreateAdminHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateAdminHandlerProvider,
        { provide: ADMIN_REPOSITORY_TOKEN, useClass: AdminLocalRepository },
      ],
    }).compile();

    handler = module.get<CreateAdminHandlerModel>(CREATE_ADMIN_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
