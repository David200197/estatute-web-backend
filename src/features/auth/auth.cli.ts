import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class AuthCli {
  @Command({
    command: ['auth:sayhello'],
    describe: 'hello from auth-command',
  })
  example() {
    console.log('Hello from AuthCommand');
  }
}
