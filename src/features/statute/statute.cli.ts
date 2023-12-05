import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class StatuteCli {
  @Command({
    command: ['statute:sayhello'],
    describe: 'hello from statute-command',
  })
  example() {
    console.log('Hello from StatuteCommand');
  }
}
