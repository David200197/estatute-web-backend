import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class SocialNetworkCli {
  @Command({
    command: ['social-network:sayhello'],
    describe: 'hello from social-network-command',
  })
  example() {
    console.log('Hello from SocialNetworkCommand');
  }
}
