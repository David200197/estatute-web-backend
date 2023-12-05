import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class AnniversaryCli {
  @Command({
    command: ['anniversary:sayhello'],
    describe: 'hello from anniversary-command',
  })
  example() {
    console.log('Hello from AnniversaryCommand');
  }
}
