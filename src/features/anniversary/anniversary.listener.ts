import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AnniversaryListener {
  @OnEvent('module.action')
  example() {
    console.log('Hello from AnniversaryListener');
  }
}
