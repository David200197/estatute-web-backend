import { CreateRequestContext, MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class InvitationCli {
  constructor(private readonly orm: MikroORM) {}
  @Command({
    command: ['invitation:sayhello'],
    describe: 'hello from invitation-command',
  })
  @CreateRequestContext()
  example() {
    console.log('Hello from InvitationCommand');
  }
}
