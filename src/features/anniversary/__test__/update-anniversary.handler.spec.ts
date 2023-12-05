import { Test, TestingModule } from '@nestjs/testing';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../providers/anniversary-repository.provider';
import { AnniversaryLocalRepository } from '../repositories/anniversary-local.repository';
import {
  UPDATE_ANNIVERSARY_HANDLER_TOKEN,
  UpdateAnniversaryHandlerProvider,
} from '../handlers/update/update-anniversary-handler.provider';
import { UpdateAnniversaryHandlerModel } from '../handlers/update/update-anniversary-handler.model';

describe('UpdateAnniversaryHandler', () => {
  let handler: UpdateAnniversaryHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateAnniversaryHandlerProvider,
        {
          provide: ANNIVERSARY_REPOSITORY_TOKEN,
          useClass: AnniversaryLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<UpdateAnniversaryHandlerModel>(
      UPDATE_ANNIVERSARY_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
