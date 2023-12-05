import { Test, TestingModule } from '@nestjs/testing';
import { ADMIN_REPOSITORY_TOKEN } from '../providers/admin-repository.provider';
import { AdminLocalRepository } from '../repositories/admin-local.repository';
import {
  UPDATE_ADMIN_HANDLER_TOKEN,
  UpdateAdminHandlerProvider,
} from '../handlers/update/update-admin-handler.provider';
import { UpdateAdminHandlerModel } from '../handlers/update/update-admin-handler.model';

describe('UpdateAdminHandler', () => {
  let handler: UpdateAdminHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateAdminHandlerProvider,
        { provide: ADMIN_REPOSITORY_TOKEN, useClass: AdminLocalRepository },
      ],
    }).compile();

    handler = module.get<UpdateAdminHandlerModel>(UPDATE_ADMIN_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
