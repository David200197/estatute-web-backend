import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class InvitationCli {
  @Command({
    command: ['invitation:sayhello'],
    describe: 'hello from invitation-command',
  })
  example() {
    console.log('Hello from InvitationCommand');
  }
}
