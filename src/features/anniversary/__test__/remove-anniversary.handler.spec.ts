import { Test, TestingModule } from '@nestjs/testing';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../providers/anniversary-repository.provider';
import { AnniversaryLocalRepository } from '../repositories/anniversary-local.repository';
import {
  REMOVE_ANNIVERSARY_HANDLER_TOKEN,
  RemoveAnniversaryHandlerProvider,
} from '../handlers/remove/remove-anniversary-handler.provider';
import { RemoveAnniversaryHandlerModel } from '../handlers/remove/remove-anniversary-handler.model';

describe('RemoveAnniversaryHandler', () => {
  let handler: RemoveAnniversaryHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveAnniversaryHandlerProvider,
        {
          provide: ANNIVERSARY_REPOSITORY_TOKEN,
          useClass: AnniversaryLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<RemoveAnniversaryHandlerModel>(
      REMOVE_ANNIVERSARY_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
