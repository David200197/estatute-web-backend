import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class SocialNetworksCli {
  @Command({
    command: ['social-networks:sayhello'],
    describe: 'hello from social-networks-command',
  })
  example() {
    console.log('Hello from SocialNetworksCommand');
  }
}
