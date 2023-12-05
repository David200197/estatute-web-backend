import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class AboutUsCli {
  @Command({
    command: ['about-us:sayhello'],
    describe: 'hello from about-us-command',
  })
  example() {
    console.log('Hello from AboutUsCommand');
  }
}
