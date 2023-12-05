import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EventListener {
  @OnEvent('module.action')
  example() {
    console.log('Hello from EventListener');
  }
}
