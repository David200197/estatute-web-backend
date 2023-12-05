import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class AdminCli {
  @Command({
    command: ['admin:sayhello'],
    describe: 'hello from admin-command',
  })
  example() {
    console.log('Hello from AdminCommand');
  }
}
