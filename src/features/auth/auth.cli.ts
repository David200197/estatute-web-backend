import { CreateRequestContext, MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class AuthCli {
  constructor(private readonly orm: MikroORM) {}
  @Command({
    command: ['auth:sayhello'],
    describe: 'hello from auth-command',
  })
  @CreateRequestContext()
  example() {
    console.log('Hello from AuthCommand');
  }
}
