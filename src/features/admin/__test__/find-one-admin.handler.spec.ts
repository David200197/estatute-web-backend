import { Test, TestingModule } from '@nestjs/testing';
import { ADMIN_REPOSITORY_TOKEN } from '../providers/admin-repository.provider';
import { AdminLocalRepository } from '../repositories/admin-local.repository';
import {
  FIND_ONE_ADMIN_HANDLER_TOKEN,
  FindOneAdminHandlerProvider,
} from '../handlers/find-one/find-one-admin-handler.provider';
import { FindOneAdminHandlerModel } from '../handlers/find-one/find-one-admin-handler.model';

describe('FindOneAdminHandler', () => {
  let handler: FindOneAdminHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneAdminHandlerProvider,
        { provide: ADMIN_REPOSITORY_TOKEN, useClass: AdminLocalRepository },
      ],
    }).compile();

    handler = module.get<FindOneAdminHandlerModel>(
      FIND_ONE_ADMIN_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
