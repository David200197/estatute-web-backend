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
import { FindOneAdminHandlerProvider } from '@src/features/admin/handlers/find-one/find-one-admin-handler.provider';
import { CreateAdminHandlerProvider } from '@src/features/admin/handlers/create/create-admin-handler.provider';
import { AdminListener } from '@src/features/admin/admin.listener';
import { ConfigModule } from '@src/config/config.module';
import { UpdateAdminHandlerProvider } from '@src/features/admin/handlers/update/update-admin-handler.provider';
import { AdminUnauthorizedException } from '@src/features/admin/exceptions/admin-unauthorized.exception';
import { HASH_PASSWORD_SERVICE_TOKEN } from '@src/shared/hash-password/hash-password-service.provider';
import { HashPasswordLocalService } from '@src/shared/hash-password/hash-password-local.service';

describe('Login - AuthController', () => {
  let authController: AuthController;
  let adminController: AdminController;
  let adminRepository: AdminLocalRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController, AdminController],
      imports: [CqrsModule, EventEmitterModule, ConfigModule],
      providers: [
        LoginAuthHandlerProvider,
        AuthUtilsServiceProvider,
        AdminServiceProvider,
        JwtService,
        ConfigService,
        FindOneAdminHandlerProvider,
        CreateAdminHandlerProvider,
        UpdateAdminHandlerProvider,
        AdminListener,
        {
          provide: ADMIN_REPOSITORY_TOKEN,
          useClass: AdminLocalRepository,
        },
        {
          provide: HASH_PASSWORD_SERVICE_TOKEN,
          useClass: HashPasswordLocalService,
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

  it('should be login', async () => {
    const password = '12345';
    const username = 'David200197';
    await adminController.create({ username, password });
    const { ok, response, data } = await authController.login({
      username,
      password,
    });
    expect(ok).toEqual(true);
    expect(response).toEqual('login user success');
    expect(data.accessToken).toEqual(expect.any(String));
    expect(data.refreshToken).toEqual(expect.any(String));
    const [admin] = adminRepository.__getStore();
    expect(admin.toObject().refreshToken).toEqual(expect.any(String));
    expect(admin.toObject().username).toEqual(expect.any(String));
    expect(admin.toObject().password).toEqual(expect.any(String));
  });

  it('should be not login if user not exist', async () => {
    const password = '12345';
    const username = 'David200197';
    authController
      .login({
        username,
        password,
      })
      .catch((error) => {
        expect(error).toEqual(new AdminUnauthorizedException());
      });
  });

  it('should be not login if user exist but different password', async () => {
    const username = 'David200197';
    await adminController.create({ username, password: '1234' });
    authController
      .login({
        username,
        password: '123',
      })
      .catch((error) => {
        expect(error).toEqual(new AdminUnauthorizedException());
      });
  });
  it('should be not login if user cannot be updated', async () => {
    const username = 'David200197';
    const password = '12345';
    adminRepository.__setUpdateRes(null);
    await adminController.create({ username, password });
    await authController
      .login({
        username,
        password,
      })
      .catch((error) => {
        expect(error).toEqual(new AdminUnauthorizedException());
      });
  });
});
