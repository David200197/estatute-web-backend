import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { ADMIN_REPOSITORY_TOKEN } from '@src/features/admin/providers/admin-repository.provider';
import { AdminLocalRepository } from '@src/features/admin/repositories/admin-local.repository';
import { LogoutAuthHandlerProvider } from '../handlers/logout-auth/logout-auth-handler.provider';

describe('Logout - AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthController,
        LogoutAuthHandlerProvider,
        {
          provide: ADMIN_REPOSITORY_TOKEN,
          useClass: AdminLocalRepository,
        },
      ],
    }).compile();
    await module.init();
    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
