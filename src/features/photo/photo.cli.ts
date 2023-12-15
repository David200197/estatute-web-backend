import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class PhotoCli {
  @Command({
    command: ['photo:sayhello'],
    describe: 'hello from photo-command',
  })
  example() {
    console.log('Hello from PhotoCommand');
  }
}
