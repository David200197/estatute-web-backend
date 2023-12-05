import { Test, TestingModule } from '@nestjs/testing';
import { STATUTE_REPOSITORY_TOKEN } from '../providers/statute-repository.provider';
import { StatuteLocalRepository } from '../repositories/statute-local.repository';
import {
  FIND_ALL_STATUTE_HANDLER_TOKEN,
  FindAllStatuteHandlerProvider,
} from '../handlers/find-all/find-all-statute-handler.provider';
import { FindAllStatuteHandlerModel } from '../handlers/find-all/find-all-statute-handler.model';

describe('FindAllStatuteHandler', () => {
  let handler: FindAllStatuteHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllStatuteHandlerProvider,
        { provide: STATUTE_REPOSITORY_TOKEN, useClass: StatuteLocalRepository },
      ],
    }).compile();

    handler = module.get<FindAllStatuteHandlerModel>(
      FIND_ALL_STATUTE_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
