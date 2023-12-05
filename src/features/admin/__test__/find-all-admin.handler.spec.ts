import { Test, TestingModule } from '@nestjs/testing';
import { ADMIN_REPOSITORY_TOKEN } from '../providers/admin-repository.provider';
import { AdminLocalRepository } from '../repositories/admin-local.repository';
import {
  FIND_ALL_ADMIN_HANDLER_TOKEN,
  FindAllAdminHandlerProvider,
} from '../handlers/find-all/find-all-admin-handler.provider';
import { FindAllAdminHandlerModel } from '../handlers/find-all/find-all-admin-handler.model';

describe('FindAllAdminHandler', () => {
  let handler: FindAllAdminHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllAdminHandlerProvider,
        { provide: ADMIN_REPOSITORY_TOKEN, useClass: AdminLocalRepository },
      ],
    }).compile();

    handler = module.get<FindAllAdminHandlerModel>(
      FIND_ALL_ADMIN_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
