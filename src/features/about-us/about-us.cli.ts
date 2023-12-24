import { CreateRequestContext, MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class AboutUsCli {
  constructor(private readonly orm: MikroORM) {}

  @Command({
    command: ['about-us:sayhello'],
    describe: 'hello from about-us-command',
  })
  @CreateRequestContext()
  example() {
    console.log('Hello from AboutUsCommand');
  }
}
