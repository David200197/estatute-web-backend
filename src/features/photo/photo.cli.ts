import { CreateRequestContext, MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class PhotoCli {
  constructor(private readonly orm: MikroORM) {}

  @Command({
    command: ['photo:sayhello'],
    describe: 'hello from photo-command',
  })
  @CreateRequestContext()
  example() {
    console.log('Hello from PhotoCommand');
  }
}
