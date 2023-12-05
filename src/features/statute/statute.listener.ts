import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class StatuteListener {
  @OnEvent('module.action')
  example() {
    console.log('Hello from StatuteListener');
  }
}
