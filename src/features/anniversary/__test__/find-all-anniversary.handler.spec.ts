import { Test, TestingModule } from '@nestjs/testing';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../providers/anniversary-repository.provider';
import { AnniversaryLocalRepository } from '../repositories/anniversary-local.repository';
import {
  FIND_ALL_ANNIVERSARY_HANDLER_TOKEN,
  FindAllAnniversaryHandlerProvider,
} from '../handlers/find-all/find-all-anniversary-handler.provider';
import { FindAllAnniversaryHandlerModel } from '../handlers/find-all/find-all-anniversary-handler.model';

describe('FindAllAnniversaryHandler', () => {
  let handler: FindAllAnniversaryHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllAnniversaryHandlerProvider,
        {
          provide: ANNIVERSARY_REPOSITORY_TOKEN,
          useClass: AnniversaryLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<FindAllAnniversaryHandlerModel>(
      FIND_ALL_ANNIVERSARY_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
