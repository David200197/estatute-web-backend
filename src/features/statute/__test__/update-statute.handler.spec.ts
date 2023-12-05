import { Test, TestingModule } from '@nestjs/testing';
import { STATUTE_REPOSITORY_TOKEN } from '../providers/statute-repository.provider';
import { StatuteLocalRepository } from '../repositories/statute-local.repository';
import {
  UPDATE_STATUTE_HANDLER_TOKEN,
  UpdateStatuteHandlerProvider,
} from '../handlers/update/update-statute-handler.provider';
import { UpdateStatuteHandlerModel } from '../handlers/update/update-statute-handler.model';

describe('UpdateStatuteHandler', () => {
  let handler: UpdateStatuteHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateStatuteHandlerProvider,
        { provide: STATUTE_REPOSITORY_TOKEN, useClass: StatuteLocalRepository },
      ],
    }).compile();

    handler = module.get<UpdateStatuteHandlerModel>(
      UPDATE_STATUTE_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
