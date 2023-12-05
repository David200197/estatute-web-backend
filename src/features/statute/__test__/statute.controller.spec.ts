import { Test, TestingModule } from '@nestjs/testing';
import { StatuteController } from '../statute.controller';

describe('StatuteController', () => {
  let controller: StatuteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatuteController],
    }).compile();

    controller = module.get<StatuteController>(StatuteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
