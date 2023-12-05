import { Test, TestingModule } from '@nestjs/testing';
import { STATUTE_REPOSITORY_TOKEN } from '../providers/statute-repository.provider';
import { StatuteLocalRepository } from '../repositories/statute-local.repository';
import {
  REMOVE_STATUTE_HANDLER_TOKEN,
  RemoveStatuteHandlerProvider,
} from '../handlers/remove/remove-statute-handler.provider';
import { RemoveStatuteHandlerModel } from '../handlers/remove/remove-statute-handler.model';

describe('RemoveStatuteHandler', () => {
  let handler: RemoveStatuteHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveStatuteHandlerProvider,
        { provide: STATUTE_REPOSITORY_TOKEN, useClass: StatuteLocalRepository },
      ],
    }).compile();

    handler = module.get<RemoveStatuteHandlerModel>(
      REMOVE_STATUTE_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
