import { Test, TestingModule } from '@nestjs/testing';
import { AnniversaryController } from '../anniversary.controller';

describe('AnniversaryController', () => {
  let controller: AnniversaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnniversaryController],
    }).compile();

    controller = module.get<AnniversaryController>(AnniversaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
