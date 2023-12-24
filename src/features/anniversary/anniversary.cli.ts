import { CreateRequestContext, MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class AnniversaryCli {
  constructor(private readonly orm: MikroORM) {}

  @Command({
    command: ['anniversary:sayhello'],
    describe: 'hello from anniversary-command',
  })
  @CreateRequestContext()
  example() {
    console.log('Hello from AnniversaryCommand');
  }
}
