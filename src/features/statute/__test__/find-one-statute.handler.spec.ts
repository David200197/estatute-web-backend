import { Test, TestingModule } from '@nestjs/testing';
import { STATUTE_REPOSITORY_TOKEN } from '../providers/statute-repository.provider';
import { StatuteLocalRepository } from '../repositories/statute-local.repository';
import {
  FIND_ONE_STATUTE_HANDLER_TOKEN,
  FindOneStatuteHandlerProvider,
} from '../handlers/find-one/find-one-statute-handler.provider';
import { FindOneStatuteHandlerModel } from '../handlers/find-one/find-one-statute-handler.model';

describe('FindOneStatuteHandler', () => {
  let handler: FindOneStatuteHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneStatuteHandlerProvider,
        { provide: STATUTE_REPOSITORY_TOKEN, useClass: StatuteLocalRepository },
      ],
    }).compile();

    handler = module.get<FindOneStatuteHandlerModel>(
      FIND_ONE_STATUTE_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
