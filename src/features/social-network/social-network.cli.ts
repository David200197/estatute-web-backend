import { CreateRequestContext, MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class SocialNetworkCli {
  constructor(private readonly orm: MikroORM) {}

  @Command({
    command: ['social-network:sayhello'],
    describe: 'hello from social-network-command',
  })
  @CreateRequestContext()
  example() {
    console.log('Hello from SocialNetworkCommand');
  }
}
