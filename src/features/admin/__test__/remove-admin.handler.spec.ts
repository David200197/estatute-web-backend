import { Test, TestingModule } from '@nestjs/testing';
import { ADMIN_REPOSITORY_TOKEN } from '../providers/admin-repository.provider';
import { AdminLocalRepository } from '../repositories/admin-local.repository';
import {
  REMOVE_ADMIN_HANDLER_TOKEN,
  RemoveAdminHandlerProvider,
} from '../handlers/remove/remove-admin-handler.provider';
import { RemoveAdminHandlerModel } from '../handlers/remove/remove-admin-handler.model';

describe('RemoveAdminHandler', () => {
  let handler: RemoveAdminHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveAdminHandlerProvider,
        { provide: ADMIN_REPOSITORY_TOKEN, useClass: AdminLocalRepository },
      ],
    }).compile();

    handler = module.get<RemoveAdminHandlerModel>(REMOVE_ADMIN_HANDLER_TOKEN);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
