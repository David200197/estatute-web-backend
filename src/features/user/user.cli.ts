import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class UserCli {
  @Command({
    command: ['user:sayhello'],
    describe: 'hello from user-command',
  })
  example() {
    console.log('Hello from UserCommand');
  }
}
