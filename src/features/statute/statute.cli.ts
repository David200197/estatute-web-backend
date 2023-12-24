import { CreateRequestContext, MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class StatuteCli {
  constructor(private readonly orm: MikroORM) {}
  @Command({
    command: ['statute:sayhello'],
    describe: 'hello from statute-command',
  })
  @CreateRequestContext()
  example() {
    console.log('Hello from StatuteCommand');
  }
}
