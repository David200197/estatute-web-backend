import { Test, TestingModule } from '@nestjs/testing';
import { STATUTE_REPOSITORY_TOKEN } from '../providers/statute-repository.provider';
import { StatuteLocalRepository } from '../repositories/statute-local.repository';
import {
  CREATE_STATUTE_HANDLER_TOKEN,
  CreateStatuteHandlerProvider,
} from '../handlers/create/create-statute-handler.provider';
import { CreateStatuteHandlerModel } from '../handlers/create/create-statute-handler.model';

describe('CreateStatuteHandler', () => {
  let handler: CreateStatuteHandlerModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateStatuteHandlerProvider,
        { provide: STATUTE_REPOSITORY_TOKEN, useClass: StatuteLocalRepository },
      ],
    }).compile();

    handler = module.get<CreateStatuteHandlerModel>(
      CREATE_STATUTE_HANDLER_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
