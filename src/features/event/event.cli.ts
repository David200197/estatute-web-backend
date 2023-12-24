import { CreateRequestContext, MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class EventCli {
  constructor(private readonly orm: MikroORM) {}
  @Command({
    command: ['event:sayhello'],
    describe: 'hello from event-command',
  })
  @CreateRequestContext()
  example() {
    console.log('Hello from EventCommand');
  }
}
