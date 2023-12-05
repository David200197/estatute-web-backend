import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class EventCli {
  @Command({
    command: ['event:sayhello'],
    describe: 'hello from event-command',
  })
  example() {
    console.log('Hello from EventCommand');
  }
}
