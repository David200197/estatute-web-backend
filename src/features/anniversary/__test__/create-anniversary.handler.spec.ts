import { Test, TestingModule } from '@nestjs/testing';
import { ANNIVERSARY_REPOSITORY_TOKEN } from '../providers/anniversary-repository.provider';
import { AnniversaryLocalRepository } from '../repositories/anniversary-local.repository';
import {
  CREATE_ANNIVERSARY_HANDLER_TOKEN,
  CreateAnniversaryHandlerProvider,
} from '../handlers/create/create-anniversary-handler.provider';
import { CreateAnniversaryHandlerModel } from '../handlers/create/create-anniversary-handler.model';

describe('CreateAnniversaryHandler', () => {
  let handler: CreateAnniversaryHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateAnniversaryHandlerProvider,
        {
          provide: ANNIVERSARY_REPOSITORY_TOKEN,
          useClass: AnniversaryLocalRepository,
        },
      ],
    }).compile();

    handler = module.get<CreateAnniversaryHandlerModel>(
      CREATE_ANNIVERSARY_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
