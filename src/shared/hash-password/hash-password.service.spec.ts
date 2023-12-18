import { Test, TestingModule } from '@nestjs/testing';
import { HashPasswordServiceModel } from './hash-password-service.model';
import {
  HASH_PASSWORD_SERVICE_TOKEN,
  HashPasswordServiceProvider,
} from './hash-password-service.provider';

describe('HashPassword', () => {
  let service: HashPasswordServiceModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HashPasswordServiceProvider],
    }).compile();
    await module.init();
    service = module.get<HashPasswordServiceModel>(HASH_PASSWORD_SERVICE_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return true', async () => {
    const hash = await service.hash('123');
    const isValid = await service.verify('123', hash);
    expect(isValid).toEqual(true);
  });

  it('should be return false', async () => {
    const hash = await service.hash('123');
    const isValid = await service.verify('124', hash);
    expect(isValid).toEqual(false);
  });
});
