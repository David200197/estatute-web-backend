import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class SocialNetworksListener {
  @OnEvent('module.action')
  example() {
    console.log('Hello from SocialNetworksListener');
  }
}
