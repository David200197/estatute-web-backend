import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { ADMIN_REPOSITORY_TOKEN } from '@src/features/admin/providers/admin-repository.provider';
import { AdminLocalRepository } from '@src/features/admin/repositories/admin-local.repository';
import { LoginAuthHandlerProvider } from '../handlers/login-auth/login-auth-handler.provider';
import { AdminController } from '@src/features/admin/admin.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthUtilsServiceProvider } from '../providers/auth-util-service.provider';
import { AdminServiceProvider } from '../providers/admin-service.provider';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { EventEmitterModule } from '@src/shared/event-emitter/event-emitter.module';
import { HashPasswordModule } from '@src/shared/hash-password/hash-password.module';
import { EventEmitterModule as EventEmitterModuleNest } from '@nestjs/event-emitter';
import { FindOneAdminHandlerProvider } from '@src/features/admin/handlers/find-one/find-one-admin-handler.provider';
import { CreateAdminHandlerProvider } from '@src/features/admin/handlers/create/create-admin-handler.provider';

describe('Login - AuthController', () => {
  let authController: AuthController;
  let adminController: AdminController;
  let adminRepository: AdminLocalRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController, AdminController],
      imports: [
        CqrsModule,
        EventEmitterModule,
        HashPasswordModule,
        EventEmitterModuleNest.forRoot({ verboseMemoryLeak: true }),
      ],
      providers: [
        AuthController,
        LoginAuthHandlerProvider,
        AuthUtilsServiceProvider,
        AdminServiceProvider,
        JwtService,
        ConfigService,
        AdminServiceProvider,
        FindOneAdminHandlerProvider,
        CreateAdminHandlerProvider,
        {
          provide: ADMIN_REPOSITORY_TOKEN,
          useClass: AdminLocalRepository,
        },
      ],
    }).compile();
    await module.init();
    authController = module.get<AuthController>(AuthController);
    adminController = module.get<AdminController>(AdminController);
    adminRepository = module.get<AdminLocalRepository>(ADMIN_REPOSITORY_TOKEN);
  });

  afterEach(() => {
    if (adminRepository) adminRepository.__reset();
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  it('should be login auth', async () => {
    const password = '12345';
    const username = 'David200197';
    await adminController.create({ username, password });
    const { ok, response, data } = await authController.login({
      username,
      password,
    });
    expect(ok).toEqual(true);
    expect(response).toEqual('');
    expect(data.accessToken).toEqual(expect.any(String));
    expect(data.refreshToken).toEqual(expect.any(String));
  });
});
