import { Test, TestingModule } from '@nestjs/testing';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../providers/anniversary-repository.provider';
import { AnniversaryLocalRepository } from '../repositories/anniversary-local.repository';
import {
  FIND_ONE_ANNIVERSARY_HANDLER_TOKEN,
  FindOneAnniversaryHandlerProvider,
} from '../handlers/find-one/find-one-anniversary-handler.provider';
import { FindOneAnniversaryHandlerModel } from '../handlers/find-one/find-one-anniversary-handler.model';

describe('FindOneAnniversaryHandler', () => {
  let handler: FindOneAnniversaryHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneAnniversaryHandlerProvider,
        {
          provide: ANNIVERSARY_REPOSITORY_TOKEN,
          useClass: AnniversaryLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<FindOneAnniversaryHandlerModel>(
      FIND_ONE_ANNIVERSARY_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
